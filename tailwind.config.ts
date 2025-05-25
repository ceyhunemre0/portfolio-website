// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class', // <-- bunu mutlaka ekle
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
