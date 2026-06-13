from pathlib import Path

import geopandas as gpd
from geoalchemy2 import Geometry
from sqlalchemy import create_engine, text


GEO_DIR = Path(r"D:\geo")

DATABASE_URL = "postgresql+psycopg://implantation_user:implantation_password@localhost:5433/implantation"

SOURCE = "ADMIN EXPRESS COG CARTO"
SOURCE_YEAR = 2026
SOURCE_DATE = "2026-01-01"


def find_gpkg() -> Path:
    gpkg_files = list(GEO_DIR.glob("*.gpkg"))

    if not gpkg_files:
        raise FileNotFoundError(f"Aucun fichier .gpkg trouvé dans : {GEO_DIR}")

    return gpkg_files[0]


def main() -> None:
    gpkg_path = find_gpkg()

    print(f"GeoPackage utilisé : {gpkg_path}")
    print("Lecture de la couche commune...")

    gdf = gpd.read_file(
        gpkg_path,
        layer="commune",
        engine="pyogrio",
    )

    print(f"Communes lues : {len(gdf)}")
    print(f"CRS source : {gdf.crs}")

    if gdf.crs is None:
        raise ValueError("CRS absent sur la couche commune.")

    if gdf.crs.to_epsg() != 2154:
        print("Reprojection vers EPSG:2154...")
        gdf = gdf.to_crs(epsg=2154)

    gdf = gdf[
        [
            "code_insee",
            "nom_officiel",
            "population",
            "statut",
            "geometry",
        ]
    ].copy()

    gdf = gdf.rename(
        columns={
            "nom_officiel": "nom",
        }
    )

    gdf["source"] = SOURCE
    gdf["source_year"] = SOURCE_YEAR
    gdf["source_date"] = SOURCE_DATE

    # Nettoyage géométrique léger
    gdf = gdf[gdf.geometry.notna()].copy()
    gdf["geometry"] = gdf.geometry.make_valid()

    # La table PostGIS utilise une colonne geom, pas geometry
    gdf = gdf.rename_geometry("geom")

    engine = create_engine(DATABASE_URL)

    with engine.begin() as conn:
        print("Vidage de la table communes...")
        conn.execute(text("TRUNCATE TABLE communes RESTART IDENTITY;"))

    print("Import dans PostGIS...")
    gdf.to_postgis(
        name="communes",
        con=engine,
        if_exists="append",
        index=False,
        dtype={
            "geom": Geometry(
                geometry_type="MULTIPOLYGON",
                srid=2154,
            )
        },
    )

    with engine.begin() as conn:
        count = conn.execute(text("SELECT COUNT(*) FROM communes;")).scalar_one()
        lille = conn.execute(
            text("SELECT code_insee, nom, population FROM communes WHERE code_insee = '59350';")
        ).fetchone()

    print(f"Communes importées : {count}")
    print(f"Test Lille : {lille}")
    print("Import terminé.")


if __name__ == "__main__":
    main()