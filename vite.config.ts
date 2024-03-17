import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },

  test: {
    coverage: {
      reporter: ["text", "html"],
    },

    globals: true,
    // environment: "jsdom",
    // setupFiles: "./src/tests",
  },
});
