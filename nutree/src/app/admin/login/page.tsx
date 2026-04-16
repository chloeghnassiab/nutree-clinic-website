'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    setLoading(false)
    if (res.ok) {
      router.push('/admin/faq')
      router.refresh()
    } else {
      setError('Incorrect password.')
    }
  }

  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: 'var(--white)', borderRadius: 12, border: '1px solid var(--border)',
        padding: '2rem 2.5rem', width: '100%', maxWidth: 380,
        boxShadow: 'var(--shadow-md)',
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', marginBottom: '0.375rem' }}>
          Admin access
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
          Nutree Clinic internal tools
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: '100%', padding: '0.75rem 1rem', borderRadius: 8,
              border: '1px solid var(--border)', fontSize: '1rem',
              fontFamily: 'var(--font-sans)', outline: 'none',
              marginBottom: '0.75rem', boxSizing: 'border-box',
            }}
          />
          {error && (
            <div style={{ fontSize: '0.875rem', color: '#c0392b', marginBottom: '0.75rem' }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Checking…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
