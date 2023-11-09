import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
    ssr: {
      noExternal: ["echarts", "echarts-liquidfill", "jinrishici"],
    },
  },
  title: "Rock Blog Template",
  description: "A Blog Site Powered By Vitepress",
  srcDir: "./src",
  lang: "zh-CN",
  rewrites: {},
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts" },
      { text: "About", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
});
