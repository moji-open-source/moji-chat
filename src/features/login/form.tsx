'use client'

import { SubmitEvent } from 'react'

import { Button, Checkbox, Input, Label } from '@/components/ui'
import type { LoginFormValues } from './types'

interface LoginFormProps {
  values: LoginFormValues
  isSubmitting?: boolean
  statusMessage?: string
  onAccountChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onRememberChange: (value: boolean) => void
  onAgreeChange: (value: boolean) => void
  onSubmit?: () => Promise<void> | void
}

export function LoginForm({
  values,
  isSubmitting = false,
  statusMessage,
  onAccountChange,
  onPasswordChange,
  onRememberChange,
  onAgreeChange,
  onSubmit,
}: LoginFormProps) {
  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    await onSubmit?.()
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} data-tauri-drag-region>
      <Input
        id="login-account"
        type="text"
        autoComplete="username"
        autoFocus
        required
        value={values.account}
        onChange={e => onAccountChange(e.target.value)}
        placeholder="name@company.com"
        className="h-11 rounded-xl border-white/10 bg-white/5"
      />

      <Input
        id="login-password"
        type="password"
        autoComplete="current-password"
        required
        value={values.password}
        onChange={e => onPasswordChange(e.target.value)}
        placeholder="••••••••"
        className="h-11 rounded-xl border-white/10 bg-white/5"
      />

      <div className="flex items-center justify-between gap-3" data-tauri-drag-region>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember-password"
            checked={values.remember}
            onCheckedChange={checked => onRememberChange(checked === true)}
          />
          <Label htmlFor="remember-password" className="text-xs font-normal text-muted-foreground">
            Remember Me
          </Label>
        </div>

        <a href="#" className="text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground hover:underline">
          Forgot?
        </a>
      </div>

      <Button
        type="submit"
        variant="default"
        className="h-11 w-full rounded-xl text-sm font-medium"
        disabled={isSubmitting || !values.agree}
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>

      {statusMessage ? (
        <p className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-muted-foreground">
          {statusMessage}
        </p>
      ) : null}

      <div className="flex items-start gap-2" data-tauri-drag-region>
        <Checkbox
          id="agree-protocol"
          checked={values.agree}
          onCheckedChange={checked => onAgreeChange(checked === true)}
        />
        <Label
          htmlFor="agree-protocol"
          className="text-xs leading-5 font-normal text-muted-foreground"
        >
          I agree to the
          <a href="#" className="px-1 text-foreground hover:underline">
            Terms
          </a>
          and
          <a href="#" className="px-1 text-foreground hover:underline">
            Privacy Policy
          </a>
        </Label>
      </div>
    </form>
  )
}
