import { defineConfig } from 'vite'

export default defineConfig({
  root: './data_dictionaryOTM',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    host: true
  }
})