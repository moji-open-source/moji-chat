import path from 'node:path'

import type { Configuration } from 'lint-staged'

function createCommand(prefix: string, join: string) {
  return (filenames: readonly string[]) =>
    `${prefix} ${filenames.map((f) => path.relative(process.cwd(), f)).join(`${join} `)}`
}

export default defineConfig({
  '*.{js,jsx,ts,tsx}': [
    createCommand('pnpm eslint --fix', ''),
    // unlock the code to enable prettier format if you use it
    // createCommand('prettier --write', '--write')
  ],
  '*.rs': [
    // Format files with rustfmt.
    () => 'cargo fmt --manifest-path ./src-tauri/Cargo.toml -- --check',
    // Check the package for errors.
    () => 'cargo check --manifest-path ./src-tauri/Cargo.toml --all',
    // Lint rust sources.
    () => 'cargo clippy --manifest-path ./src-tauri/Cargo.toml --all-targets --all-features --tests --benches -- -D warnings',
  ],
})

function defineConfig(configs: Configuration) {
  return configs
}
