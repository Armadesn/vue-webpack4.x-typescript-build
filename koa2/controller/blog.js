/* eslint-disable */
const getList = async (author, keyword) => {
    return []
}

const getDetail = async (id) => {
    return {}
}

const newBlog = async (blogData = {}) => {
    return {
        id: 1
    }
}

const updateBlog = async (id, blogData = {}) => {
    
    return false
}

const delBlog = async (id, author) => {
    
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}