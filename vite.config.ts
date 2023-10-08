import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: ["**/*.svg"],
    }),
  ],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      config: "/src/config",
      hooks: "/src/hooks",
      pages: "/src/pages",
      providers: "/src/providers",
      routes: "/src/routes",
      states: "/src/states",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
