var express = require('express')
var app = express();
var persons = [
    {name:"Smith",age:23,sex:"女"},
    {name:"Jane",age:30,sex:"女"},
    {name:"Jack",age:32,sex:"男"},
    {name:"Michael",age:40,sex:"男"}
];

// get person by name.
app.get('/person/:name',function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    var name = req.params.name;
    var person;
    persons.forEach(function(element){
        if(name == element.name){
            person = element;
        }
    });
    if(person != undefined){
        res.json(person);
    } else {
        res.send("no person found.");
    }
});

var server = app.listen(8081, function() {
   console.log('listening on port %d', server.address().port);
});