import { Button } from '@/components/ui'

export function LoginSecondaryActions() {
  return (
    <div className="space-y-4" data-tauri-drag-region>
      <div className="flex w-full items-center gap-3" data-tauri-drag-region>
        <div className="h-px flex-1 bg-white/10" data-tauri-drag-region />
        <span className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase" data-tauri-drag-region>
          or continue with
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid w-full grid-cols-2 gap-2" data-tauri-drag-region>
        <Button type="button" variant="outline" size="sm">
          Google
        </Button>
        <Button type="button" variant="outline" size="sm">
          GitHub
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground" data-tauri-drag-region>
        New here?
        <a href="#" className="ml-1 text-foreground transition-colors hover:text-primary">
          Create an account
        </a>
      </p>
    </div>
  )
}
