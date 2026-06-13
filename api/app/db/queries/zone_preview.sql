WITH params AS (
  SELECT
    CAST(:lat AS double precision) AS lat,
    CAST(:lon AS double precision) AS lon,
    CAST(:radius_m AS integer) AS radius_m
),

input_point AS (
  SELECT
    lat,
    lon,
    radius_m,
    ST_Transform(
      ST_SetSRID(ST_MakePoint(lon, lat), 4326),
      2154
    ) AS geom
  FROM params
),

raw_zone AS (
  SELECT
    lat,
    lon,
    radius_m,
    ST_Buffer(geom, radius_m, 'quad_segs=32') AS geom
  FROM input_point
),

communes_intersected AS (
  SELECT
    c.code_insee,
    c.nom,
    c.population,
    ST_Area(ST_Intersection(c.geom, z.geom)) AS intersect_area_m2
  FROM communes c
  CROSS JOIN raw_zone z
  WHERE ST_Intersects(c.geom, z.geom)
)

SELECT jsonb_build_object(
  'input', jsonb_build_object(
    'lat', z.lat,
    'lon', z.lon,
    'radius_m', z.radius_m
  ),
  'stats', jsonb_build_object(
    'raw_area_m2', ROUND(ST_Area(z.geom)::numeric, 2),
    'raw_area_km2', ROUND((ST_Area(z.geom) / 1000000)::numeric, 4)
  ),
  'communes', COALESCE(
    (
      SELECT jsonb_agg(
        jsonb_build_object(
          'code_insee', ci.code_insee,
          'nom', ci.nom,
          'population', ci.population,
          'intersect_area_m2', ROUND(ci.intersect_area_m2::numeric, 2),
          'intersect_area_km2', ROUND((ci.intersect_area_m2 / 1000000)::numeric, 4)
        )
        ORDER BY ci.intersect_area_m2 DESC
      )
      FROM communes_intersected ci
    ),
    '[]'::jsonb
  ),
  'layers', jsonb_build_object(
    'raw_zone', jsonb_build_object(
      'type', 'Feature',
      'properties', jsonb_build_object(
        'kind', 'raw_zone',
        'radius_m', z.radius_m
      ),
      'geometry', ST_AsGeoJSON(ST_Transform(z.geom, 4326))::jsonb
    )
  )
) AS result
FROM raw_zone z;