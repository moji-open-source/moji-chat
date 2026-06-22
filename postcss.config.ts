import type { Config } from 'postcss-load-config'

const defineConfig = (cnf: Config) =>
  cnf

export default defineConfig({
  plugins: {
    '@tailwindcss/postcss': {},
  },
})
