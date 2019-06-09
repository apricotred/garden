const mongoose  = require('mongoose')
const consola   = require('consola')

let DB_OPT = {}

if (process.env.TEST) {
  DB_OPT = process.env.DB_OPT.TEST
} else {
  DB_OPT = process.env.DB_OPT.PROD
}
// 连接数据库
mongoose.connect(DB_OPT.URI, DB_OPT.OPT)

const db = mongoose.connection

// 连接失败
db.on('error', consola.error.bind(console, 'connection error:'))

// 连接成功
db.once('open', function() {
  // connected!
  consola.success.bind("connected!")
});

// 断开数据库
mongoose.connection.on("disconnected", function(){
  consola.log("disconnected!")
})


module.exports = {
  mongoose
}