import { defineConfig, Plugin } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// Lightweight plugin to handle require() for images in tests
const mockRequirePlugin = (): Plugin => ({
  name: 'mock-require',
  transform(code, id) {
    // Process all constants files that might have require() for images
    if (id.includes('/constants/') && id.endsWith('.ts')) {
      // Replace require() calls for images with a mocked string
      return code.replace(/require\(["']([^"']+\.(jpg|png|gif|svg|webp|jpeg))["']\)/g, '"mocked-image.jpg"');
    }
    return code;
  },
});

export default defineConfig({
  plugins: [react(), mockRequirePlugin()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./__tests__/setup.tsx"],
    onConsoleLog(log) {
      // Suppress specific warnings
      if (
        log.includes("ReactDOMTestUtils.act is deprecated") ||
        log.includes("for a non-boolean attribute") ||
        log.includes("Function components cannot be given refs")
      ) {
        return false;
      }
    },
    exclude: [
      "**/node_modules/**",
      "**/.next/**",
      "**/build/**",
      "**/__tests__/e2e/**",
      "**/__tests__/setup.tsx",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./coverage",
      include: [
        "src/components/**/*.ts",
        "src/components/**/*.tsx",
        "src/utils/**/*.ts",
        "src/utils/**/*.tsx",
        "src/pages/**/*.tsx",
      ],
      exclude: [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/node_modules/**",
        "**/tooling/**",
        "**/build/**",
      ],
    },
  },
  resolve: {
    conditions: ["development", "browser"],
    alias: {
      "@test": path.resolve(__dirname, "./__tests__"),
      components: path.resolve(__dirname, "./src/components"),
      constants: path.resolve(__dirname, "./src/constants"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      public: path.resolve(__dirname, "./public"),
      styles: path.resolve(__dirname, "./src/styles"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  esbuild: {
    sourcemap: false,
  },
});
