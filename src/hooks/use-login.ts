/**
 * useLogin — encapsulates the login flow for the LoginScene.
 *
 * Responsibilities:
 *   1. Hold form state (account, password, remember, agree)
 *   2. Validate before submit
 *   3. Call the Tauri auth service
 *   4. Surface loading / error status to the UI
 *
 * Keeping this in a hook means the scene component stays purely presentational —
 * it just wires props to the form.
 */

'use client'

import { useCallback, useState } from 'react'

import type { LoginFormValues } from '@/components/login/login.types'
import { login } from '@/services/auth'

// ── Types ───────────────────────────────────────────────────────────────────

interface UseLoginReturn {
  /** Current form field values. */
  values: LoginFormValues
  /** Whether a login request is in flight. */
  isSubmitting: boolean
  /** User-facing status message (error or success). */
  message: string
  /** Update a single form field. */
  updateField: <K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) => void
  /** Trigger the login flow. */
  handleSubmit: () => Promise<void>
}

// ── Constants ───────────────────────────────────────────────────────────────

const INITIAL_VALUES: LoginFormValues = {
  account: '',
  password: '',
  remember: true,
  agree: true,
}

// ── Hook ────────────────────────────────────────────────────────────────────

export function useLogin(): UseLoginReturn {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const updateField = useCallback(
    <K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) => {
      setValues(prev => ({ ...prev, [field]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(async () => {
    setMessage('')

    // Client-side validation
    if (!values.account.trim() || !values.password) {
      setMessage('Please enter your account and password.')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await login({
        account: values.account,
        password: values.password,
      })

      // TODO: persist token, redirect to messages window
      // e.g. localStorage.setItem('token', res.token)
      //      invoke('show_main_window')
      setMessage(`Login successful! Welcome, ${res.userId}`)
    } catch (err) {
      setMessage(err instanceof Error ? err.message : String(err))
    } finally {
      setIsSubmitting(false)
    }
  }, [values])

  return { values, isSubmitting, message, updateField, handleSubmit }
}
