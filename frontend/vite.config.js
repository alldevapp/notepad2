import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/secure-notepad/',  // ✅ Important — this tells Vite to prefix all assets & API calls
  plugins: [vue()]
})
