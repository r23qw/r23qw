import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { nextTick, onMounted, ref } from "vue";
import { useEventListener, useDebounceFn } from "@vueuse/core";

function patchHistory() {
  const methods = ["pushState", "replaceState"];

  methods.forEach((method) => {
    const originMethod = window.history[method];

    window.history[method] = function (...args) {
      const event = new Event(method.toLocaleLowerCase());
      window.dispatchEvent(event);
      return originMethod.apply(window.history, args);
    };
  });
}
patchHistory();

export function useImageViewer() {
  let viewer = ref<Viewer | null>(null);
  let create = () => {
    const target = document.querySelector<HTMLElement>(".VPDoc");
    if (target === null) return;
    viewer.value = new Viewer(target, {
      transition: false,
      navbar: false,
      toolbar: false,
    });
  };
  let update = useDebounceFn(() => {
    viewer.value?.destroy();
    create();
  }, 1000);
  onMounted(create);
  useEventListener(
    ["popstate", "pushstate", "replacestate"] as (keyof WindowEventMap)[],
    update
  );
}
