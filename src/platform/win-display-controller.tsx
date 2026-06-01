'use client'

import { useEffect } from 'react'
import { getCurrentWebviewWindow } from '@tauri-apps/api/webviewWindow'

/** Fallback in case ResizeObserver never fires (e.g. webview quirks). */
const SHOW_TIMEOUT_MS = 500

/**
 * Prevents white flash on Tauri window startup.
 * Requires the window to be created with `visible: false`.
 *
 * Strategy: wait for fonts + first layout pass, then reveal the window.
 */
export function WinDisplayController() {
  useEffect(() => {
    waitForRenderReady()
      .then(() => getCurrentWebviewWindow().show())
  }, [])

  return null
}

/** Resolves once fonts are loaded and the browser has completed a layout pass. */
async function waitForRenderReady() {
  await document.fonts.ready

  await new Promise<void>((resolve) => {
    // Guarantee the window eventually shows even if ResizeObserver never fires
    const timeout = window.setTimeout(resolve, SHOW_TIMEOUT_MS)

    const observer = new ResizeObserver(() => {
      observer.disconnect()
      window.clearTimeout(timeout)
      resolve()
    })
    observer.observe(document.body)
  })
}
