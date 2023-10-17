import { defineConfig } from "vite";
import { resolve } from "path";
const rootDir = resolve(__dirname);

export default defineConfig({
  publicDir: "./public",
  plugins: [],
  build: {
    outDir: resolve("./", "dist"), // Directorul de ieșire

    rollupOptions: {
      input: {
        "index-html": resolve(__dirname, "index.html"),
        main: resolve(__dirname, "main.js"),
        // admin: resolve(__dirname, 'src/pages/admin/admin.js'),
        // 'admin-html': resolve(__dirname, 'src/pages/admin/admin.html'),
        // cart: resolve(__dirname, 'src/pages/cart/cart.js'),
        "cart-html": resolve(__dirname, "src/pages/cart.html"),
        "contact-html": resolve(__dirname, "src/pages/contact.html"),
        // details: resolve(__dirname, 'src/pages/details/details.js'),
        // 'details-html': resolve(__dirname, 'src/pages/details/details.html'),
      },
    },
  },
});
