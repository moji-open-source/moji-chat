import { ContactRound } from 'lucide-react'

export function ContactEmpty() {
  return (
    <div className="flex h-full min-h-0 flex-1 items-center justify-center p-8">
      <div className="flex max-w-sm flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <ContactRound />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">Select a contact</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Choose someone from the list to view their profile.
          </p>
        </div>
      </div>
    </div>
  )
}
