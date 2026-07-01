import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

/**
 * Dynamic Open Graph (OG) image generation using @vercel/og.
 * Serves customized brand sharing cards for social previews.
 */
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    
    // Extract dynamic query params
    const title = searchParams.get('title') || 'Abdul Munim'
    const type = searchParams.get('type') || 'Software Developer'
    const siteName = 'abdulmunim.dev'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#09090b',
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Terminal motif wrapper */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '8px',
              padding: '8px 16px',
              marginBottom: '32px',
              fontSize: '18px',
              color: '#06b6d4',
            }}
          >
            <span style={{ color: '#10b981' }}>~</span>
            <span style={{ color: '#64748b', marginRight: '6px' }}>$</span>
            <span>{type.toLowerCase().replace(/\s+/g, '_')}.exe</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '40px',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>

          {/* Footer stats / branding */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '32px',
              marginTop: 'auto',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#06b6d4' }}>&lt;</span>
              AM
              <span style={{ color: '#06b6d4' }}> /&gt;</span>
            </span>

            <span
              style={{
                fontSize: '20px',
                color: '#64748b',
                marginLeft: 'auto',
              }}
            >
              {siteName}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG generation error:', error)
    return new Response(`Failed to generate image`, { status: 500 })
  }
}
