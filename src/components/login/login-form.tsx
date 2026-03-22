'use client'

import { SubmitEvent, useState } from 'react'

import { Button, Checkbox, Input, Label } from '@/components/ui'

interface LoginFormValues {
  account: string
  password: string
  remember: boolean
  agree: boolean
}

interface LoginFormProps {
  onSubmit?: (values: LoginFormValues) => Promise<void> | void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [agree, setAgree] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      await onSubmit?.({ account, password, remember, agree })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} data-tauri-drag-region>
      <Input
        id="login-account"
        type="text"
        autoComplete="username"
        autoFocus
        required
        value={account}
        onChange={e => setAccount(e.target.value)}
        placeholder="Account"
        className="h-11 rounded-xl bg-muted"
      />

      <Input
        id="login-password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="h-11 rounded-xl bg-muted"
      />

      <div className="flex items-center gap-2" data-tauri-drag-region>
        <Checkbox
          id="remember-password"
          checked={remember}
          onCheckedChange={checked => setRemember(checked === true)}
        />
        <Label htmlFor="remember-password" className="text-xs font-normal text-muted-foreground">
          Remember password
        </Label>
      </div>

      <Button
        type="submit"
        variant="default"
        className="h-11 w-full rounded-xl text-sm font-medium"
        disabled={isSubmitting || !agree}
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>

      <div className="flex items-start gap-2" data-tauri-drag-region>
        <Checkbox
          id="agree-protocol"
          checked={agree}
          onCheckedChange={checked => setAgree(checked === true)}
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

      <div className="h-9"></div>
    </form>
  )
}
