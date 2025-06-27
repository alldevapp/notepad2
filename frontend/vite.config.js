import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/secure-notepad/', // 👈 this is critical
  plugins: [vue()]
})
