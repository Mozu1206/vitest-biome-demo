import react from "@vitejs/plugin-react-swc";
/// <reference types="vitest/config" />
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    test: {
      globals: true,
    },
  };
});
