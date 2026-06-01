'use client'
import { useEffect } from 'react'

function contextmenuEventHandler(e: MouseEvent) {
  e.preventDefault()
}

/**
 * Disables the browser context menu so the web dev environment behaves
 * like the native desktop shell. Only active outside production builds.
 */
export function useDisableContextMenu() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production')
      return

    if (!window) return

    window.addEventListener('contextmenu', contextmenuEventHandler)

    return () => {
      window.removeEventListener('contextmenu', contextmenuEventHandler)
    }
  }, [])
}
