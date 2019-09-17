const router = require('koa-router')()
const { login, getInfo } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.prefix('/api/user')


router.post('/login', async(ctx, next) => {
    const { username, password } = ctx.request.body
    const data = await login(username, password)
    if (data.accessToken) {
        ctx.body = new SuccessModel(data)
        return
    }
    ctx.body = new ErrorModel('登录失败')
})

router.get('/logout', async function(ctx, next ) {
    ctx.body = new SuccessModel()
    return
})

router.post('/info', async( ctx, next ) => {
    const isAdmin = ctx.request.header['x-access-token'] == 'admin-token'
    const data = await getInfo( isAdmin )
    ctx.body = new SuccessModel(data)
    return
})


module.exports = router