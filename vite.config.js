import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: path.join(__dirname, "Bin"),
    emptyOutDir: true,
  },
});
