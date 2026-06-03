import { openAppWindow } from '@/bindings'
import { getCurrentWindow } from '@tauri-apps/api/window'

/**
 * Hide the current window, open the main app window, then close the current one.
 * Useful for login → app transitions.
 */
export async function switchToAppWindow(): Promise<void> {
  const current = getCurrentWindow()
  await current.hide()
  await openAppWindow()
  await current.close()
}
