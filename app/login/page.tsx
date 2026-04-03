'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (mode === 'signup') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setMessage(error.message)
        setLoading(false)
        return
      }

      const user = data.user
      if (user) {
        await supabase.from('profiles').insert({
          id: user.id,
          email: user.email,
        })
      }

      setMessage('Account created. Check your email if confirmation is enabled.')
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setMessage(error.message)
        setLoading(false)
        return
      }

      router.push('/')
      router.refresh()
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-bold mb-2">
          {mode === 'login' ? 'Login' : 'Create account'}
        </h1>
        <p className="text-sm text-slate-300 mb-6">
          BodyOS auth step 1
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold"
          >
            {loading
              ? 'Loading...'
              : mode === 'login'
              ? 'Login'
              : 'Create account'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-slate-300">{message}</p>
        )}

        <button
          onClick={() =>
            setMode(mode === 'login' ? 'signup' : 'login')
          }
          className="mt-4 text-sm text-blue-300"
        >
          {mode === 'login'
            ? 'Need an account? Sign up'
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  )
}
