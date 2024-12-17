import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = Number(searchParams.get('width') || '600')
  const height = Number(searchParams.get('height') || '400')
  const backgroundColor = searchParams.get('bg') || '#e0e0e0'
  const textColor = searchParams.get('text') || '#999'

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <text 
    x="50%" 
    y="50%" 
    dominant-baseline="middle" 
    text-anchor="middle" 
    fill="${textColor}" 
    font-family="Arial, sans-serif" 
    font-size="${Math.min(width, height) / 10}"
  >
    ${width} x ${height}
  </text>
</svg>
  `.trim()

  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400'
    }
  })
}
