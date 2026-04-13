'use client'
import { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const SYSTEM_PROMPT = `You are the Nutree Clinic patient care assistant. Nutree Clinic is a licensed Florida telehealth practice offering GLP-1 weight loss (compounded semaglutide and tirzepatide), NAD+ therapy, Sermorelin, Oxytocin nasal spray, and B6/B12 injections.

Your role is to help patients understand Nutree's treatments, answer general wellness and eligibility questions, and guide them toward booking a consultation or starting a treatment plan.

Tone: Warm, knowledgeable, honest. Never pushy. Speak like a trusted health professional, not a salesperson.

Key rules:
- Never give personalised medical advice or diagnose conditions
- Always recommend a consultation with a licensed Nutree clinician for specific health questions
- Never promise specific results — use "may", "many patients report", etc.
- Do not mention metformin or B12 in the context of GLP-1 treatments
- Do not use the term "brand name" — refer to Wegovy®, Mounjaro®, etc. by name
- Never compare Nutree negatively to competitors
- Be honest if a treatment may not be appropriate: "Your clinician's role is to determine what is medically appropriate for you"
- Prices: Semaglutide from $249/mo, Tirzepatide from $349/mo, Sermorelin from $125 first month, Consultation $50 (credited to first plan)
- For NAD+, Oxytocin, B12 pricing: say "prices are available at consultation"

End responses with a relevant call to action: either booking a consultation ($50, credited to first plan) or checking eligibility.

Keep responses concise — 2-4 sentences max unless the patient asks for detail.`

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m the Nutree care assistant. I can help you understand our treatments, check if you might be a good candidate, or point you in the right direction. What brings you here today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' })
  const [showLead, setShowLead] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Show lead form after 3 exchanges
  useEffect(() => {
    const userMessages = messages.filter(m => m.role === 'user').length
    if (userMessages >= 2 && !leadCaptured && !showLead) {
      setShowLead(true)
    }
  }, [messages, leadCaptured, showLead])

  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, system: SYSTEM_PROMPT }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I\'m having trouble connecting. Please try again or call us directly.' }])
    } finally {
      setLoading(false)
    }
  }

  async function submitLead() {
    if (!leadForm.email) return
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...leadForm, source: 'chat_widget', messages }),
      })
    } catch { /* silent */ }
    setLeadCaptured(true)
    setShowLead(false)
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: `Thanks ${leadForm.name ? leadForm.name : 'for sharing that'}! I've saved your details. A Nutree clinician can follow up with you, or you can book directly at nutreeclinic.com/consult — the $50 consultation fee is credited toward your first plan.`
    }])
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', bottom: '1.25rem', right: '1.25rem',
          width: 52, height: 52, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
          border: 'none', cursor: 'pointer', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(82,159,153,0.4)',
          color: '#fff', fontSize: '1.375rem',
        }}
        aria-label="Open chat"
      >
        💬
      </button>
    )
  }

  return (
    <div style={{
      position: 'fixed', bottom: '1rem', right: '1rem',
      width: 'min(360px, calc(100vw - 2rem))',
      height: 'min(520px, calc(100vh - 4rem))',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      border: '0.5px solid var(--border)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', zIndex: 1000,
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
        padding: '0.875rem 1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🌿</div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Nutree Care Assistant</div>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Powered by AI · Not a clinician</div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.125rem', cursor: 'pointer', opacity: 0.7 }}>×</button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '82%',
              padding: '0.625rem 0.875rem',
              borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
              background: msg.role === 'user' ? 'linear-gradient(135deg, var(--teal), var(--teal-dark))' : 'var(--base)',
              color: msg.role === 'user' ? '#fff' : 'var(--ink)',
              fontSize: '0.9375rem', lineHeight: 1.6,
              border: msg.role === 'assistant' ? '0.5px solid var(--border)' : 'none',
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {/* Lead capture form */}
        {showLead && !leadCaptured && (
          <div style={{
            background: 'var(--base)', borderRadius: 'var(--radius-md)',
            padding: '0.75rem', border: '0.5px solid var(--border)',
            marginTop: 4,
          }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.375rem' }}>
              Want a Nutree clinician to follow up?
            </div>
            <input
              placeholder="Your name"
              value={leadForm.name}
              onChange={e => setLeadForm(f => ({ ...f, name: e.target.value }))}
              style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid var(--border)', fontSize: '0.875rem', marginBottom: 4, background: 'var(--white)', fontFamily: 'var(--font-sans)' }}
            />
            <input
              placeholder="Email address *"
              type="email"
              value={leadForm.email}
              onChange={e => setLeadForm(f => ({ ...f, email: e.target.value }))}
              style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid var(--border)', fontSize: '0.875rem', marginBottom: 4, background: 'var(--white)', fontFamily: 'var(--font-sans)' }}
            />
            <input
              placeholder="Phone (optional)"
              type="tel"
              value={leadForm.phone}
              onChange={e => setLeadForm(f => ({ ...f, phone: e.target.value }))}
              style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid var(--border)', fontSize: '0.875rem', marginBottom: 6, background: 'var(--white)', fontFamily: 'var(--font-sans)' }}
            />
            <div style={{ display: 'flex', gap: 4 }}>
              <button onClick={submitLead} style={{ flex: 1, padding: '6px', borderRadius: 6, background: 'var(--ink)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 700 }}>
                Submit
              </button>
              <button onClick={() => setShowLead(false)} style={{ padding: '6px 10px', borderRadius: 6, background: 'none', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--ink-3)' }}>
                Skip
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ padding: '0.5rem 0.875rem', borderRadius: '12px 12px 12px 2px', background: 'var(--base)', border: '0.5px solid var(--border)', fontSize: '0.9375rem', color: 'var(--ink-3)' }}>
              Typing…
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '0.625rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.375rem' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Ask about treatments, eligibility…"
          style={{
            flex: 1, padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border)',
            fontSize: '0.9375rem', fontFamily: 'var(--font-sans)',
            background: 'var(--base)', outline: 'none',
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            width: 34, height: 34, borderRadius: '50%',
            background: input.trim() ? 'linear-gradient(135deg, var(--teal), var(--teal-dark))' : 'var(--border)',
            border: 'none', cursor: input.trim() ? 'pointer' : 'default',
            color: '#fff', fontSize: '0.875rem', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          →
        </button>
      </div>
    </div>
  )
}
