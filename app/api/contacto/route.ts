import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { nombre, email, empresa, asunto, mensaje } = await req.json()

  if (!nombre || !email || !asunto || !mensaje) {
    return NextResponse.json({ error: 'Campos obligatorios incompletos' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey || resendKey === 'your-resend-api-key-here') {
    // Key not configured — log and return ok for dev
    console.log('Contacto recibido (Resend no configurado):', { nombre, email, empresa, asunto })
    return NextResponse.json({ ok: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'web@gestoriaramonmuntaner.com',
      to: 'davidbaobaobao@gmail.com',
      reply_to: email,
      subject: `[Web] ${asunto} — ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa || '—'}\nAsunto: ${asunto}\n\n${mensaje}`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
