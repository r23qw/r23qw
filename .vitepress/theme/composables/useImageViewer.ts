import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vitepress";

export function useImageViewer() {
  let viewer = ref<Viewer | null>(null);
  const router = useRouter();

  let create = () => {
    const target = document.querySelector<HTMLElement>(".VPDoc");
    if (target === null) return;
    viewer.value = new Viewer(target, {
      transition: false,
      navbar: false,
      toolbar: false,
    });
  };
  let destroy = () => {
    viewer.value?.destroy();
  };

  router.onBeforeRouteChange = destroy;
  router.onAfterRouteChanged = create;
  onMounted(create);
  onUnmounted(destroy);
}
