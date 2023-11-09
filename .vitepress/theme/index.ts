// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import { ViewTransitionsPlugin } from "vue-view-transitions";
import RockLayout from "./RockLayout.vue";
import RockPosts from "./RockPosts.vue";
import RockHome from "./RockHome.vue";
import "./style.css";
import "virtual:uno.css";

export default {
  extends: DefaultTheme,
  Layout: RockLayout,
  enhanceApp({ app, router, siteData }) {
    app.component("rock-home", RockHome);
    app.component("rock-posts", RockPosts);
    app.use(ViewTransitionsPlugin());
  },
} satisfies Theme;
