'use client';

import dynamic from 'next/dynamic';

const IranMap = dynamic(() => import('./IranMap'), {
  ssr: false,
  loading: () => (
    <div className="map-container">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(15, 23, 42, 0.85)',
          color: '#38bdf8',
          fontWeight: 600,
          letterSpacing: '0.08em'
        }}
      >
        Loading map…
      </div>
    </div>
  )
});

export default function MapView() {
  return <IranMap />;
}
