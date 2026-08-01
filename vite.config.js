import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> relative asset paths, so the built site works at a domain root
// AND at github.io/<repo>/ during setup. Build to docs/ so GitHub Pages can serve
// straight from the `main` branch /docs folder (no CI needed).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'docs', emptyOutDir: true },
})
