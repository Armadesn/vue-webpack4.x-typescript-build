import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Message } from 'element-ui'
import { UserModule } from "@/store/modules/user";
import { Route } from "vue-router";

const whiteList: string[] = ["/login", "/auth-redirect"];

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start();
  if (UserModule.token) {
    if (to.path === '/login') {
        // If is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else {
        // Check whether the user has obtained his permission roles
        if (UserModule.roles.length === 0) {
          try {
            // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
            await UserModule.GetUserInfo()
            const roles = UserModule.roles
            // Generate accessible routes map based on role
            // PermissionModule.GenerateRoutes(roles)
            // // Dynamically add accessible routes
            // router.addRoutes(PermissionModule.dynamicRoutes)
            // Hack: ensure addRoutes is complete
            // Set the replace: true, so the navigation will not leave a history record
            next({ ...to, replace: true })
          } catch (err) {
            // Remove token and redirect to login page
            UserModule.ResetToken()
            Message.error(err || 'Has Error')
            console.log('tiaole')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        } else {
          next()
        }
      }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to: Route) => {
  NProgress.done();
});
