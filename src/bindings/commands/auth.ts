import { invoke } from '@tauri-apps/api/core'

import type { LoginParams, LoginResponse } from '../types'

export async function login(params: LoginParams): Promise<LoginResponse> {
  return invoke<LoginResponse>('login', { params })
}
