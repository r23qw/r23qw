// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import RockLayout from "./RockLayout.vue";
import RockHome from "./RockHome.vue";
import "./style.css";
import "virtual:uno.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(RockLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("rock-home", RockHome);
  },
} satisfies Theme;
