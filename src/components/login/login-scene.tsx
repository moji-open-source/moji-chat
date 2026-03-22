'use client'

import { useState } from 'react'

import { LoginForm } from './login-form'
import { LoginHero } from './login-hero'
import { LoginSecondaryActions } from './login-secondary-actions'
import { LoginShell } from './login-shell'
import type { LoginFormValues } from './login.types'

const initialValues: LoginFormValues = {
  account: '',
  password: '',
  remember: true,
  agree: true,
}

export function LoginScene() {
  const [values, setValues] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('Use your account to sync conversations and workspace preferences.')

  function updateField<K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) {
    setValues(current => ({ ...current, [field]: value }))
  }

  async function handleSubmit(nextValues: LoginFormValues) {
    setMessage('')
    setIsSubmitting(true)

    try {
      console.log('Login submit:', nextValues)
      setMessage('Sign-in request submitted. You can connect the real authentication flow here next.')
    } catch {
      setMessage('Sign-in failed. Check your network connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <LoginShell>
      <LoginHero />
      <LoginForm
        values={values}
        isSubmitting={isSubmitting}
        statusMessage={message}
        onAccountChange={value => updateField('account', value)}
        onPasswordChange={value => updateField('password', value)}
        onRememberChange={value => updateField('remember', value)}
        onAgreeChange={value => updateField('agree', value)}
        onSubmit={handleSubmit}
      />
      <LoginSecondaryActions />
    </LoginShell>
  )
}
