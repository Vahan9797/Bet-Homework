/* npm install for node_modules */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var todos = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/mvc', express.static(__dirname + '/mvc'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.put('/', function(req, res) {
    res.send(todos[todos.push({
        id: (!todos.length) ? 1 : todos.length,
        title: req.body.title,
        completed: false
    }) - 1]);
});

app.delete('/:elementID', function(req, res) {
    console.log(req.params.elementID);
    res.send({index: todos.findIndex(function(e) {
        return e.id === req.params.elementID;
    })});
});

app.post('/:elementID', function(req, res) {
    var el = todos.find(function(e) {
        return e.id === req.params.elementID;
    });

    el.completed = req.body.checked;

    res.send(el);
});

app.post('/getTodoList', function(req, res) {
    res.send(todos);
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})