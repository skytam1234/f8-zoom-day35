import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    base: "f8-zoom-day35",
    plugins: [react()],
});
