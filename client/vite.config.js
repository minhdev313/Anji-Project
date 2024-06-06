import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer"; // Import Autoprefixer directly

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
      // '/api': {
      //   target: 'https://pay.payos.vn',
      //   // changeOrigin: true,
      //   secure: false
      // }
    },
  },
  plugins: [react(), reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], // Use imported Autoprefixer here
    },
  },
});
