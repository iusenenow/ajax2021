const express = require('express')
const axios = require('axios')

const app = express()
//Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body
  console.log(req.body);
  res.send("<h1>Cool!</h1>")
})

app.listen(9001, () => {
  console.log("Server is running on port 9001");
})