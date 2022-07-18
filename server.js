
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
var mongoose = require('mongoose');

app.use(cors())

var {
  mongooseConnectionString
} = require("./config.json");
mongoose.connect(mongooseConnectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log('Connecting to MongoDB'))

//server info
var dcinfoSchema = require('./Schemas/dcinfo.js')
console.log(dcinfoSchema);

app.get('/', async (req, res) => {
  var data = await dcinfoSchema.findOne({
    id: '808777076769030174'
  })
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
