import React from 'react'

import { cn } from '@/lib/utils'

export function FooterCopyright(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p
    {...props}
    className={cn('text-[10px] text-slate-400/60 uppercase tracking-tighter', props.className)}
  >
    © 2026 Clover You. All rights reserved.
  </p>
}
