import { useRouter } from "vitepress";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

export function useProgress() {
  const router = useRouter();
  router.onBeforeRouteChange = async () => {
    NProgress.start();
  };
  router.onAfterRouteChanged = async () => {
    NProgress.done();
  };
}
