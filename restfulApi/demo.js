var express = require('express')

var app = express();

app.get('/hello', function(req, res){
   res.send('hello express!')
});

var server = app.listen(8081, function() {
   console.log('listening on port %d', server.address().port);
});