const express = require('express')
var path = require("path");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.resolve("./index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})