//1.引入express
const express = require("express")

//2.创建应用对象
const app = express()

//3.创建路由规则
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html")
})

app.get("/contact", (req, res) => {
  res.send("Contact me at: Teresa@gmail.com")
})

app.get("/about", (req, res) => {
  res.send("My name is Teresa and I am 11.")
})

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("Connected to server port 8000..")
})