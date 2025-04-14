import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/athlete-card/",
  // base: "/",
  plugins: [tailwindcss(), react()],
  assetsInclude: ["**/*.glb"],
});
