import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { Message } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { Route } from 'vue-router'

const whiteList:string[] = ['/login', '/auth-redirect']

router.beforeEach(async(to: Route, _: Route, next: any) => {
    // Start progress bar
    NProgress.start()
    if (UserModule.token) {}
    else{
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach((to: Route) => {
    NProgress.done()
})