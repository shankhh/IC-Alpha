import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
//import basicSsl from "@vitejs/plugin-basic-ssl";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
