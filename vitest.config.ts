import path from "node:path";
import { defineConfig } from "vitest/config";

const projectRoot = path.resolve(import.meta.dirname);

export default defineConfig({
  root: projectRoot,
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "client", "src"),
    },
  },
  test: {
    environment: "node",
    include: ["client/src/**/__tests__/**/*.test.{ts,tsx}"],
    globals: true,
  },
});
