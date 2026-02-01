import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Izrada Web Sajtova Beograd - Nikola Kremić';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d0416 0%, #1a0f2e 50%, #2a1847 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 360,
            height: 360,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Izrada Web Sajtova
          </h1>

          <p
            style={{
              fontSize: 36,
              color: '#c4b5fd',
              margin: 0,
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Profesionalno | Moderano | Optimizovano
          </p>

          <p
            style={{
              fontSize: 28,
              color: '#a78bfa',
              margin: 0,
              marginBottom: 50,
            }}
          >
            📍 Beograd, Srbija
          </p>

          <div
            style={{
              fontSize: 32,
              fontWeight: '600',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            izradi-sajt.com
          </div>

          <p
            style={{
              fontSize: 24,
              color: '#a78bfa',
              margin: 0,
            }}
          >
            +381 60 422 4990
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
