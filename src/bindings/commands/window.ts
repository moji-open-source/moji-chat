import { invoke, isTauri } from '@tauri-apps/api/core'

/// Open the native settings window (desktop only).
export async function openSettingsWindow(): Promise<void> {
  await invoke<void>('open_settings_window')
}

/// Whether native window commands are available.
export function canOpenNativeWindow(): boolean {
  return isTauri()
}
