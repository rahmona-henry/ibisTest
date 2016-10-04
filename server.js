var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send('hello ibis')
})

app.listen(3000, function(){
  console.log('Making IBIS bookings on port 3000!')
})
