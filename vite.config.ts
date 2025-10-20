// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Use /Portfolio/ in production so GitHub Pages serves assets correctly
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "/",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
