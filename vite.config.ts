import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: "/",
  server: {
    https: {
      key: fs.readFileSync('./tg-mini-app.local-key.pem'),
      cert: fs.readFileSync('./tg-mini-app.local.pem'),
    },
    host: 'tg-mini-app.local',
  },
  define: {
    'process.env': process.env
  }
});
