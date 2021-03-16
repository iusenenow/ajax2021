//1.引入express
const express = require("express")

//2.创建应用对象
const app = express()

//3.创建路由规则
app.get("/server", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  res.send("HELLO AJAX!")
})

app.post("/server", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  res.send("HELLO AJAX POST!")
})

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("Connected to server port 8000..");
})