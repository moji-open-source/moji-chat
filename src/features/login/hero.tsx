import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'

export function LoginHero() {
  return (
    <div className="flex flex-col items-center gap-4 text-center" data-tauri-drag-region>
      <Avatar className="h-24 w-24 border-4 border-white/10 shadow-md select-none" data-tauri-drag-region>
        <AvatarFallback className="bg-primary text-3xl font-semibold text-primary-foreground">
          M
        </AvatarFallback>
        <AvatarImage src="https://avatars.githubusercontent.com/u/50982977?v=4" draggable={false} />
      </Avatar>
    </div>
  )
}
