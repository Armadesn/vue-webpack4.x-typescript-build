/* eslint-disable */
const router = require('koa-router')()
const { login, getUsers } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
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

router.post('/getUsers', async function( ctx, next ) {
    const { name } = ctx.request.body
    const data = await getUsers( name )
    ctx.body = new SuccessModel(data)
    return
})


module.exports = router