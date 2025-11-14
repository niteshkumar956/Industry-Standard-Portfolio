import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // For now, log to console. Replace with email service later.
    console.log('NEW CONTACT FORM SUBMISSION:', data)
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({ 
      success: true,
      message: 'Message received! I will contact you within 24 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}