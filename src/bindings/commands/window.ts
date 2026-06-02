import { invoke, isTauri } from '@tauri-apps/api/core'

/// Open the native settings window (desktop only).
export async function openSettingsWindow(): Promise<void> {
  await invoke<void>('open_settings_window')
}

/// Whether native window commands are available.
export function canOpenNativeWindow(): boolean {
  return isTauri()
}

/// Open (or focus) the main application window (desktop only).
export async function openAppWindow() {
  return await invoke<void>('open_app_window')
}
