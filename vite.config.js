import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode:'development',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: true
  }
})
