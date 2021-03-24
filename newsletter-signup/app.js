const express = require('express')
const axios = require('axios')
const https = require("https")

const app = express()
//Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data)

  const request = https.request("https://us1.api.mailchimp.com/3.0/lists/9739ba1348", {
    method: "POST",
    auth: "iusenenow:4edee45912e34c3c57d2e6bd65faf6bf-us1"
  }, response => {
    response.on("data", data => console.log(JSON.parse(data)))
  })

  request.write(jsonData)
  request.end()

})

app.listen(9001, () => {
  console.log("Server is running on port 9001");
})

//apikey: 4edee45912e34c3c57d2e6bd65faf6bf-us1
//Unique id: 9739ba1348
//'{"name":"","contact":{"company":"","address1":"","address2":"","city":"","state":"","zip":"","country":"","phone":""},"permission_reminder":"","use_archive_bar":false,"campaign_defaults":{"from_name":"","from_email":"","subject":"","language":""},"notify_on_subscribe":"","notify_on_unsubscribe":"","email_type_option":false,"visibility":"pub","double_optin":false,"marketing_permissions":false}'