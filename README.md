# Iran GeoJSON Map

An interactive Next.js application that serves a high-resolution GeoJSON outline of the Islamic Republic of Iran and visualizes it with Leaflet.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the map locally.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm start` – run the production server
- `npm run lint` – lint the project

## GeoJSON Source

The file at `public/iran.geojson` is derived from the [datahub.io geo-countries dataset](https://datahub.io/core/geo-countries) and contains the complete national boundary geometry for Iran (`FeatureCollection`, WGS84).

## Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e7001548
```
