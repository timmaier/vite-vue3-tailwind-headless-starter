import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { resolve } from "path";
import mkcert from'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    VueRouter({ importMode: 'sync' }),
    vue(),
    Components({ resolvers: [HeadlessUiResolver()] }),
    AutoImport({
      imports: ['vue', '@vueuse/head', VueRouterAutoImports],
    }),
    mkcert()
  ],
  server: {
    open: true,
    https: true,
  },
  resolve: {
    alias: {
      "@api": resolve(__dirname, "src/api"),
      "@store": resolve(__dirname, "src/store"),
      "@pages": resolve(__dirname, "src/pages"),
      "@lib": resolve(__dirname, "src/lib"),
      "@plugins": resolve(__dirname, "src/plugins"),
    },
  },
})
