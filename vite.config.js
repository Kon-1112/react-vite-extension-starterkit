import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { resolve } from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                welcome: resolve(__dirname, './pages/welcome.html'),
                dashboard: resolve(__dirname, './pages/dashboard.html'),
                popup: resolve(__dirname, './pages/popup.html'),
                options: resolve(__dirname, './pages/options.html'),
            },
        },
    },
    plugins: [
        react(),
        tsconfigPaths(),
        crx({ manifest }),
    ],
});
