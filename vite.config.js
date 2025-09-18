import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { jsxLocPlugin } from '@builder.io/vite-plugin-jsx-loc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/meu-portifolio/',
  plugins: [react(),tailwindcss(),jsxLocPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
