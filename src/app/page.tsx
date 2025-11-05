import MapView from '@/components/MapView';

export default function Page() {
  return (
    <main className="page">
      <h1 className="title">Iran National Boundary</h1>
      <p className="subtitle">
        Exact-country GeoJSON for the Islamic Republic of Iran, visualized on an interactive map.
        Download the dataset directly or explore it below.
      </p>
      <MapView />
      <p className="attribution">
        Source:{' '}
        <a href="/iran.geojson" download>
          DataHub Geo Countries (Natural Earth 1:10m)
        </a>{' '}
        (Open Data Commons Open Database License)
      </p>
    </main>
  );
}
