'use client'
import { Send, Paperclip, Smile, Scissors, History } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    textDirection: 'ltr',
    editorProps: {
      attributes: {
        autoCapitalize: 'off',
        autoComplete: 'off',
        autoCorrect: 'off',
        class: 'h-full text-sm leading-relaxed',
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return <EditorContent
    editor={editor}
    className="h-full overflow-y-auto border-0 bg-transparent shadow-none"
  />
}

/**
 * The composer stays isolated so send actions, attachments,
 * and optimistic updates can be added without touching the message list.
 */
export function MessageComposer() {
  return (
    <footer className="px-4 pb-4 pt-1.5 shrink-0 relative h-full">
      <div className="h-full w-full flex flex-col rounded-[18px] overflow-hidden dark:bg-white/5 bg-white/80 backdrop:blur-[32px] backdrop:saturate-80 border border-white/10 shadow-glass">
        {/* <div className="flex flex-wrap gap-1.5 px-3 pt-3"></div> */}
        <div className="flex items-center gap-0.5 px-3 pt-2.5 pb-1.5">
          <ToolIcon><Scissors /></ToolIcon>
          <ToolIcon><Smile /></ToolIcon>
          <ToolIcon><Paperclip /></ToolIcon>
          <div className="flex-1"></div>
          <ToolIcon><History /></ToolIcon>
        </div>

        <div className="mx-3 h-[0.5px] bg-white/6"></div>

        <div className="px-3 py-2 flex-1 overflow-hidden">
          <Tiptap />
        </div>

        <div className="flex items-center justify-between px-3 pb-2.5">
          <p className="text-tiny text-white/14"> newline</p>
          <Button variant="ghost" className="text-white/18 [&_svg]:size-3 text-[12px] h-7.5 bg-white/6 hover:text-white/60!">
            <Send /> Send
          </Button>
        </div>
      </div>
    </footer>
  )
}

function ToolIcon({ children }: React.PropsWithChildren) {
  return <Button variant="ghost" className="size-6 p-0 text-white/32 hover:text-white/65 [&_svg]:size-3.5">{children}</Button>
}
