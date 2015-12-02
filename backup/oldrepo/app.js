var express = require('express')
var app = express()

app.use("/", express.static(__dirname + '/'));
app.use("/assets", express.static(__dirname + '/assets'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

app.get('/', function (req, res) {
  res.render('index.html')
})