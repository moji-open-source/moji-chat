/**
 * Auth service — thin wrapper around Tauri invoke for authentication.
 *
 * This file exists to:
 *   1. Keep `invoke()` calls out of components / hooks
 *   2. Provide typed interfaces for request/response
 *   3. Act as the single place to swap when the backend changes
 *
 * The frontend never makes HTTP requests directly — all network
 * communication goes through Tauri commands in src-tauri/src/commands/.
 */

import { invoke } from '@tauri-apps/api/core'

// ── Types ───────────────────────────────────────────────────────────────────

export interface LoginParams {
  account: string
  password: string
}

export interface LoginResponse {
  token: string
  userId: string
}

// ── Service ─────────────────────────────────────────────────────────────────

/**
 * Call the Rust `login` command.
 *
 * @throws Will throw if the Tauri command returns an error (network failure,
 *         non-2xx response, deserialization error, etc.).
 */
export async function login(params: LoginParams): Promise<LoginResponse> {
  return invoke<LoginResponse>('login', { params })
}
