'use client'

import { LoginForm, LoginHero, LoginShell } from '@/components/login'

export default function LoginPage() {
  return (
    <LoginShell>
      <div className="pb-8">
        <LoginHero />
      </div>
      <LoginForm
        onSubmit={values => {
          console.log('Login submit:', values)
        }}
      />
    </LoginShell>
  )
}
