const { ErrorModel } = require('../model/resModel')

module.exports = async(ctx, next) => {
    await next()
    return
}