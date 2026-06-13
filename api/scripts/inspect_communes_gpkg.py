from pathlib import Path

import geopandas as gpd
import pyogrio


GEO_DIR = Path(r"D:\geo")


def find_gpkg() -> Path:
    gpkg_files = list(GEO_DIR.glob("*.gpkg"))

    if not gpkg_files:
        raise FileNotFoundError(f"Aucun fichier .gpkg trouvé dans : {GEO_DIR}")

    return gpkg_files[0]


def main() -> None:
    gpkg_path = find_gpkg()

    print(f"GeoPackage utilisé : {gpkg_path}")
    print()

    layers = pyogrio.list_layers(gpkg_path)

    print("Couches disponibles :")
    for layer in layers:
        print(f"- {layer[0]}")

    print()
    print("Inspection rapide des couches :")

    for layer in layers:
        layer_name = layer[0]

        print()
        print("=" * 80)
        print(f"Couche : {layer_name}")

        try:
            gdf = gpd.read_file(gpkg_path, layer=layer_name, rows=5, engine="pyogrio")
        except Exception as exc:
            print(f"Erreur lecture couche {layer_name}: {exc}")
            continue

        print(f"CRS : {gdf.crs}")
        print(f"Colonnes : {list(gdf.columns)}")

        non_geom_cols = [col for col in gdf.columns if col != "geometry"]

        print("Exemples :")
        print(gdf[non_geom_cols].head(5).to_string(index=False))

        print("Types géométrie :")
        print(gdf.geometry.geom_type.value_counts().to_string())


if __name__ == "__main__":
    main()