//1.引入express
const express = require("express")
const axios = require("axios")

//2.创建应用对象
const app = express()

// parse application/json, basically parse incoming Request Object as a JSON Object 
// app.use(json())
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.urlencoded({ extended: true }))

//3.创建路由规则
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html")
// })

// app.get("/contact", (req, res) => {
//   res.send("Contact me at: Teresa@gmail.com")
// })

// app.get("/about", (req, res) => {
//   res.send("My name is Teresa and I am 11.")
// })

// app.post("/", (req, res) => {
//   const { num1, num2 } = req.body
//   const result = Number(num1) + Number(num2)
//   res.send(`<h1>The result of the calculation is ${result}.</h1>`)
// })

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
  const { weight, height } = req.body
  const bmi = parseFloat(weight) / parseFloat(height * height)
  res.send(`<h1>Your BMI is ${bmi}.</h1>`)
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bitcoinTicker.html")
})

app.post("/", (req, res) => {
  const { crypto, fiat } = req.body
  axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${crypto}${fiat}`)
    .then(response => res.send(
      `<h1>The current price of ${crypto} is ${response.data.last} ${fiat}.</h1>
      <p>The current data is ${response.data.display_currentDate}.</p>`))
    .catch(error => res.send(error.message))
})

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("Connected to server port 8000..")
})