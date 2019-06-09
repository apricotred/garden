const mongoose = require("mongoose")
// const db        = require("../index")

/**
 * 模型定义
 */
export const Log = {
    time: "string",
    info: []
}

export const model = Log

// 模型
const LogSchema = mongoose.model("cate", Log)

/**
 * 插入数据
 * @param {*} log 要插入的数据
 */

export const insert = async (log) => {
    const doc = await LogSchema.create(log).exec()
    return doc
}

/**
 * delete sth.
 * @param {*} log which will be removed
 */
export const remove = async (log) => {
    
    const doc = await LogSchema.remove(log).exec()

    return doc
}

/**
 * update sth.
 * @param {*} old old cate 
 * @param {*} now update to  
 */
export const update = (old, now) => {

    const doc = LogSchema.findOneAndUpdate(old, now).exec()

    return doc
}

/**
 * find req
 * @param {*} query
 * @param {*} page 
 * @param {*} limit
 */
export const find = (query, page, limit = 10) => {
    page = (page - 1) < 0 ? 0 : (page - 1)

    const doc = Log.find(query, null, {skip: (page * limit), limit: limit}).exec()

    return doc
}


