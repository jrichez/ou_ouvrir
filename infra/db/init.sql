CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS communes (
  id SERIAL PRIMARY KEY,
  code_insee TEXT,
  nom TEXT,
  population INTEGER,
  statut TEXT,
  source TEXT,
  source_year INTEGER,
  source_date DATE,
  geom geometry(MultiPolygon, 2154)
);

CREATE INDEX IF NOT EXISTS communes_geom_idx
ON communes
USING GIST (geom);

CREATE INDEX IF NOT EXISTS communes_code_insee_idx
ON communes (code_insee);

CREATE INDEX IF NOT EXISTS communes_source_year_idx
ON communes (source_year);

CREATE TABLE IF NOT EXISTS exclusion_zones (
  id SERIAL PRIMARY KEY,
  source TEXT,
  category TEXT,
  label TEXT,
  geom geometry(MultiPolygon, 2154)
);

CREATE INDEX IF NOT EXISTS exclusion_zones_geom_idx
ON exclusion_zones
USING GIST (geom);

CREATE TABLE IF NOT EXISTS analyses (
  id UUID PRIMARY KEY,
  activity TEXT NOT NULL,
  input_address TEXT,
  lat DOUBLE PRECISION NOT NULL,
  lon DOUBLE PRECISION NOT NULL,
  radius_m INTEGER NOT NULL,
  raw_geom geometry(Polygon, 2154),
  excluded_geom geometry(MultiPolygon, 2154),
  usable_geom geometry(MultiPolygon, 2154),
  raw_area_m2 DOUBLE PRECISION,
  excluded_area_m2 DOUBLE PRECISION,
  usable_area_m2 DOUBLE PRECISION,
  excluded_pct DOUBLE PRECISION,
  created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX IF NOT EXISTS analyses_raw_geom_idx
ON analyses
USING GIST (raw_geom);

CREATE INDEX IF NOT EXISTS analyses_usable_geom_idx
ON analyses
USING GIST (usable_geom);
