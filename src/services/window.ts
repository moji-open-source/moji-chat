import { invoke, isTauri } from '@tauri-apps/api/core'

export const OPEN_APP_SETTING_WINDOW_COMMAND = 'open_app_setting_window'

export function canOpenDesktopWindow() {
  return isTauri()
}

export async function openAppSettingWindow(): Promise<void> {
  if (!canOpenDesktopWindow()) {
    throw new Error('Settings windows are only available in the desktop app.')
  }

  await invoke<void>(OPEN_APP_SETTING_WINDOW_COMMAND)
}
