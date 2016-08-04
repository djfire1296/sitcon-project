var express = require('express');
var bodyParser = require('body-parser');
 
var app = express()
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.post('/text',function(req, res){
	console.log(req.body.haha);
	res.end();
})

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.listen(1296);