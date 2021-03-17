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

//针对 IE 缓存
app.get("/ie", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  res.send("HELLO IE缓存!")
})

app.get("/delay", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  setTimeout(() => {
    res.send("HELLO IE缓存!")
  }, 3000)
})

//可以接受任意类型的请求
app.all("/server", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Header', '*')
  //设置响应体
  res.send("HELLO AJAX POST!")
})

app.all("/json-server", (req, res) => {
  //设置响应头：设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Header', '*')
  //对对象进行转换，因为send方法只能发送字符串和buffer
  const data = JSON.stringify({ age: 11, name: "Teresa" })
  //设置响应体
  res.send(data)
})

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("Connected to server port 8000..");
})