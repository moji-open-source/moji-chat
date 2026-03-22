import { Button } from '@/components/ui'

export function LoginSecondaryActions() {
  return (
    <>
      <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
        <a href="#" className="transition-colors hover:text-foreground">
          忘记密码？
        </a>
        <a href="#" className="transition-colors hover:text-foreground">
          创建账号
        </a>
      </div>

      <div className="grid w-full grid-cols-2 gap-2">
        <Button type="button" variant="outline" size="sm">
          Google
        </Button>
        <Button type="button" variant="outline" size="sm">
          GitHub
        </Button>
      </div>
    </>
  )
}
