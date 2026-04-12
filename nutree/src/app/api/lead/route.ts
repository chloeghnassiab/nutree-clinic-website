import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, source, messages } = body

    // Log to console in dev — replace with Firestore/DB write in prod
    console.log('[LEAD]', { name, email, phone, source, timestamp: new Date().toISOString() })

    // TODO: write to Firestore
    // const db = getFirestore()
    // await db.collection('leads').add({ name, email, phone, source, messages, createdAt: FieldValue.serverTimestamp() })

    // TODO: send SendGrid notification to Atara
    // await sendLeadEmail({ name, email, phone, source })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
