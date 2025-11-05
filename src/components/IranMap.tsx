'use client';

import { useEffect, useMemo, useState } from 'react';
import type { FeatureCollection } from 'geojson';
import { GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const DEFAULT_CENTER: [number, number] = [32.4279, 53.688];
const DEFAULT_ZOOM = 5;

function FitBounds({ data }: { data: FeatureCollection | null }) {
  const map = useMap();

  useEffect(() => {
    if (!data) {
      return;
    }

    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();
    layer.remove();

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [data, map]);

  return null;
}

export default function IranMap() {
  const [data, setData] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/iran.geojson')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load GeoJSON: ${response.status}`);
        }
        return (await response.json()) as FeatureCollection;
      })
      .then((json) => {
        if (!cancelled) {
          setData(json);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const style = useMemo(
    () => ({
      color: '#38bdf8',
      weight: 2,
      fillOpacity: 0.35,
      fillColor: '#0ea5e9'
    }),
    []
  );

  return (
    <div className="map-container">
      <MapContainer
        className="map"
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom
        zoomControl
        attributionControl
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {data && <GeoJSON data={data} style={() => style} />}
        {error && (
          <div className="leaflet-top leaflet-right">
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.92)',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                color: '#f87171',
                fontWeight: 600
              }}
            >
              {error}
            </div>
          </div>
        )}
        <FitBounds data={data} />
      </MapContainer>
    </div>
  );
}
