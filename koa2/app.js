/* eslint-disable */
/**
 * @event koa2
 */
const Koa = require('koa')
const app = new Koa()
/** * @event views-引擎 */
const views = require('koa-views')
/** * @event koas转json */
const json = require('koa-json')
/** * @event 错误 */
const onerror = require('koa-onerror')
/** * @event parser */
const bodyparser = require('koa-bodyparser')
/** * @event console.log */
const logger = require('koa-logger')
/** * @event session */
const session = require('koa-generic-session')
/** * @event 路径 */
const path = require('path')
/** * @event 文件 */
const fs = require('fs')
/** * @event 输出 */
const morgan = require('koa-morgan')

/** * @event 博客接口 */
const blog = require('./routes/blog')
/** * @event 用户接口 */
const user = require('./routes/user')
/** * @event 主接口 */
const index = require('./routes/index')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())


// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

const ENV = process.env.NODE_ENV
if (ENV !== 'production') {
  // 开发环境 / 测试环境
  app.use(morgan('dev'));
} else {
  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(morgan('combined', {
    stream: writeStream
  }));
}

// session 配置
app.keys = ['WJiol#23123_']
app.use(session({
  // 配置 cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
}))




// routes
app.use(index.routes(), index.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
