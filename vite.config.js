import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "build"
    },
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "~": resolve(__dirname, "src/components")
        }
    }
})