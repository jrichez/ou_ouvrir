"use client";

import { DebugZoneMap } from "@/components/map/DebugZoneMap";

import { useState } from "react";

type ZonePreviewResponse = {
  input: {
    lat: number;
    lon: number;
    radius_m: number;
  };
  stats: {
    raw_area_m2: number;
    raw_area_km2: number;
  };
  communes: Array<{
    code_insee: string;
    nom: string;
    population: number;
    intersect_area_m2: number;
    intersect_area_km2: number;
  }>;
  layers: {
    raw_zone: unknown;
  };
};

export default function DebugZonePage() {
  const [lat, setLat] = useState("50.6369");
  const [lon, setLon] = useState("3.0635");
  const [radiusM, setRadiusM] = useState("1000");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ZonePreviewResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runAnalysis() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyses/zone-preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lat: Number(lat),
          lon: Number(lon),
          radius_m: Number(radiusM),
          activity: "restaurant",
          address: "Point test Lille",
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Erreur API ${response.status} : ${body}`);
      }

      const data = (await response.json()) as ZonePreviewResponse;
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Debug zone
      </h1>

      <p style={{ marginBottom: 24, color: "#555" }}>
        Page interne pour tester la génération d’une zone brute autour d’un point.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 12,
          marginBottom: 24,
          alignItems: "end",
        }}
      >
        <label>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Latitude</div>
          <input
            value={lat}
            onChange={(event) => setLat(event.target.value)}
            style={{
              width: "100%",
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          />
        </label>

        <label>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Longitude</div>
          <input
            value={lon}
            onChange={(event) => setLon(event.target.value)}
            style={{
              width: "100%",
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          />
        </label>

        <label>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Rayon mètres</div>
          <select
            value={radiusM}
            onChange={(event) => setRadiusM(event.target.value)}
            style={{
              width: "100%",
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <option value="500">500 m</option>
            <option value="1000">1 km</option>
            <option value="2000">2 km</option>
          </select>
        </label>

        <button
          onClick={runAnalysis}
          disabled={loading}
          style={{
            padding: 11,
            border: 0,
            borderRadius: 8,
            background: "#111",
            color: "white",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Analyse..." : "Lancer"}
        </button>
      </section>

      {error && (
        <section
          style={{
            padding: 16,
            border: "1px solid #f2b8b5",
            background: "#fff3f2",
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <strong>Erreur</strong>
          <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
        </section>
      )}

      {result && (
        <>
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12,
              marginBottom: 24,
            }}
          >
          
          <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
            Carte
          </h2>

          <DebugZoneMap
            lat={Number(lat)}
            lon={Number(lon)}
            rawZone={result.layers.raw_zone as GeoJSON.Feature<GeoJSON.Geometry>}
          />
        </section>
          
            <StatCard
              label="Surface brute"
              value={`${result.stats.raw_area_km2} km²`}
            />
            <StatCard
              label="Surface brute"
              value={`${Math.round(result.stats.raw_area_m2).toLocaleString("fr-FR")} m²`}
            />
            <StatCard
              label="Communes intersectées"
              value={String(result.communes.length)}
            />
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              Communes intersectées
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid #eee",
              }}
            >
              <thead>
                <tr style={{ background: "#f7f7f7" }}>
                  <th style={cellStyle}>Code INSEE</th>
                  <th style={cellStyle}>Commune</th>
                  <th style={cellStyle}>Population</th>
                  <th style={cellStyle}>Surface intersectée</th>
                </tr>
              </thead>
              <tbody>
                {result.communes.map((commune) => (
                  <tr key={commune.code_insee}>
                    <td style={cellStyle}>{commune.code_insee}</td>
                    <td style={cellStyle}>{commune.nom}</td>
                    <td style={cellStyle}>
                      {commune.population.toLocaleString("fr-FR")}
                    </td>
                    <td style={cellStyle}>{commune.intersect_area_km2} km²</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              Réponse API brute
            </h2>
            <pre
              style={{
                padding: 16,
                background: "#111",
                color: "#eee",
                borderRadius: 8,
                overflowX: "auto",
                fontSize: 13,
              }}
            >
              {JSON.stringify(result, null, 2)}
            </pre>
          </section>
        </>
      )}
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 8,
        background: "#fafafa",
      }}
    >
      <div style={{ color: "#666", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 800 }}>{value}</div>
    </div>
  );
}

const cellStyle = {
  padding: 10,
  border: "1px solid #eee",
  textAlign: "left" as const,
};