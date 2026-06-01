'use client'

import { FooterCopyright } from '@/components/footer-copyright'

import { LoginForm } from './form'
import { LoginHero } from './hero'
import { LoginSecondaryActions } from './secondary-actions'
import { LoginShell } from './shell'
import { useLogin } from './use-login'

export function LoginScene() {
  const { values, isSubmitting, message, updateField, handleSubmit } = useLogin()

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

      <footer className="flex flex-col items-center gap-4 w-full py-8 bg-transparent">
        <div className="text-[11px] font-medium tracking-wide text-slate-400" data-tauri-drag-region>
          Don't have an account? <a className="text-primary font-bold hover:underline" href="#">Sign Up</a>
        </div>

        <FooterCopyright className="text-center dark:opacity-45" />
      </footer>
    </LoginShell>
  )
}
