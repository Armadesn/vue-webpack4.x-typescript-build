import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout/index.vue";
export const constantRoutes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"
          ),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          affix: true
        }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    base: "/",
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = resetRouter();
  (router as any).matcher = (newRouter as any).matcher;
}

export default router;
