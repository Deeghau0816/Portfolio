import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ✅ Required for GitHub Pages project sites
  base: "/Portfolio/",
  server: {
    open: true,
  },
});
