const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: 'BSvYeUXvnvDHtVPrYOc65agGj',
  consumer_secret: 'WngRCFFYUuVaFyWDe7xfvKdWiUMtPJQePu41iqjAQoiTh8rkgD',
  access_token_key: '890157332465844224-BEjodQlLUxICjySSEHoZxPibORoMhjt',
  access_token_secret: 'jo249AD4c0io0n6d45s0AxntAleiHqm75doWfMzj9XTTp'
});

const Server = require('simple-websocket/server');

const server = new Server({ port: 3070 }); // see `ws` docs for other options

module.exports = startServer = () => {
  server
    .on('connection', socket => {
    /*  socket.on('data', function (data) {})
      socket.on('close', function () {})
      socket.on('error', function (err) {})*/

      const stream = client.stream('statuses/filter', {track: 'politics,war,elections'});

      stream.on('data', event => {
          socket.send(JSON.stringify(event));
          console.log(event && event.text);
      });

      stream.on('error', error => {
        console.log(error);
      })
    })
}

startServer();