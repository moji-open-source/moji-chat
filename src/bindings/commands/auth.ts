import { invoke, isTauri } from '@tauri-apps/api/core'

import type { LoginParams, LoginResponse } from '../types'

export async function login(params: LoginParams): Promise<LoginResponse> {
  return invoke<LoginResponse>('login', { params })
}

/// Check if we're running inside Tauri (vs. browser dev mode).
export function isDesktop(): boolean {
  return isTauri()
}
