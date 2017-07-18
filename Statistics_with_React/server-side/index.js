/* npm install for node_modules */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const StatsItem = require('./public/StatisticsItem');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/prices', function(req, res) {
    res.send([new StatsItem('Nasdaq'), new StatsItem('Nikkei'), new StatsItem('Apple inc.')]);
});

app.listen(8888, function() {
    console.log('Example app listening on port 8888!');
})