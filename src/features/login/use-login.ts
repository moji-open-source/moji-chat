'use client'

import { useCallback, useState } from 'react'

import { login, openAppWindow } from '@/bindings'

import type { LoginFormValues } from './types'

interface UseLoginReturn {
  values: LoginFormValues
  isSubmitting: boolean
  message: string
  updateField: <K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) => void
  handleSubmit: () => Promise<void>
}

const INITIAL_VALUES: LoginFormValues = {
  account: '',
  password: '',
  remember: true,
  agree: true,
}

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
      // TODO: persist token, switch to main window
      setMessage(`Login successful! Welcome, ${res.userId}`)
      await openAppWindow()
    } catch (err) {
      setMessage(err instanceof Error ? err.message : String(err))
    } finally {
      setIsSubmitting(false)
    }
  }, [values])

  return { values, isSubmitting, message, updateField, handleSubmit }
}
