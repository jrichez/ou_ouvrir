"use client";

import { useEffect, useRef } from "react";
import maplibregl, { LngLatBounds, Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type GeoJsonFeature = GeoJSON.Feature<GeoJSON.Geometry>;

type DebugZoneMapProps = {
  lat: number;
  lon: number;
  rawZone?: GeoJsonFeature | null;
};

const RAW_ZONE_SOURCE_ID = "raw-zone-source";
const RAW_ZONE_FILL_LAYER_ID = "raw-zone-fill";
const RAW_ZONE_LINE_LAYER_ID = "raw-zone-line";

export function DebugZoneMap({ lat, lon, rawZone }: DebugZoneMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      center: [lon, lat],
      zoom: 13,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    markerRef.current = new maplibregl.Marker()
      .setLngLat([lon, lat])
      .addTo(map);

    map.on("load", () => {
      map.addSource(RAW_ZONE_SOURCE_ID, {
        type: "geojson",
        data: emptyFeatureCollection(),
      });

      map.addLayer({
        id: RAW_ZONE_FILL_LAYER_ID,
        type: "fill",
        source: RAW_ZONE_SOURCE_ID,
        paint: {
          "fill-opacity": 0.22,
        },
      });

      map.addLayer({
        id: RAW_ZONE_LINE_LAYER_ID,
        type: "line",
        source: RAW_ZONE_SOURCE_ID,
        paint: {
          "line-width": 2,
        },
      });
    });

    mapRef.current = map;

    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
      map.remove();
      mapRef.current = null;
    };
  }, [lat, lon]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markerRef.current?.setLngLat([lon, lat]);

    if (!map.isStyleLoaded()) {
      map.once("load", () => {
        updateRawZone(map, rawZone ?? null);
        fitMap(map, lat, lon, rawZone ?? null);
      });
      return;
    }

    updateRawZone(map, rawZone ?? null);
    fitMap(map, lat, lon, rawZone ?? null);
  }, [lat, lon, rawZone]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: 520,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #e5e5e5",
      }}
    />
  );
}

function updateRawZone(map: Map, rawZone: GeoJsonFeature | null) {
  const source = map.getSource(RAW_ZONE_SOURCE_ID) as
    | maplibregl.GeoJSONSource
    | undefined;

  if (!source) return;

  source.setData(
    rawZone
      ? {
          type: "FeatureCollection",
          features: [rawZone],
        }
      : emptyFeatureCollection()
  );
}

function fitMap(map: Map, lat: number, lon: number, rawZone: GeoJsonFeature | null) {
  if (!rawZone) {
    map.easeTo({
      center: [lon, lat],
      zoom: 13,
      duration: 500,
    });
    return;
  }

  const bounds = new LngLatBounds();

  extendBounds(bounds, rawZone.geometry.coordinates);

  if (!bounds.isEmpty()) {
    map.fitBounds(bounds, {
      padding: 40,
      duration: 600,
    });
  }
}

function extendBounds(bounds: LngLatBounds, coordinates: unknown) {
  if (!Array.isArray(coordinates)) return;

  if (
    coordinates.length >= 2 &&
    typeof coordinates[0] === "number" &&
    typeof coordinates[1] === "number"
  ) {
    bounds.extend([coordinates[0], coordinates[1]]);
    return;
  }

  for (const child of coordinates) {
    extendBounds(bounds, child);
  }
}

function emptyFeatureCollection(): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [],
  };
}