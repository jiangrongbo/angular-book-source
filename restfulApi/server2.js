var express = require('express')
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var app = express();

// file upload.
app.all('/fileUpload',function(req, res){
    req.header("Access-Control-Request-Method","POST,OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    var form = new multiparty.Form({uploadDir: './files/'});
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files,null,2);
        if(err){
            console.log('parse error: ' + err);
        } else {
            console.log('parse files: ' + filesTmp);
            var inputFile = files.file[0];
            var uploadedPath = inputFile.path;
            var dstPath = './files/' + inputFile.originalFilename;
            fs.rename(uploadedPath, dstPath, function(err) {
                 if(err){
                   console.log('rename error: ' + err);
                 } else {
                   console.log('rename ok');
                 }
            });
        }
        res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: filesTmp}));
    });
});

var server = app.listen(8081, function() {
   console.log('listening on port %d', server.address().port);
});