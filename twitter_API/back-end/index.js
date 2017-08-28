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

let socket;

server.on('connection', s => {
  socket = s;
  s.on('close', () => socket = null);
});

let stream;

app.post('/category/:trackingToken', (req, res) => {
  try {
    stream && stream.destroy();
  } catch (e) {
    throw e;
  }

  if (req.params.trackingToken) {
    stream = client.stream('statuses/filter', {
      track: req.params.trackingToken
    });

    stream.on('data', event => {
      socket && socket.send(JSON.stringify({
        author: event.user.name,
        username: event.user.screen_name,
        text: event.text
      }));
    });

    stream.on('error', error => {
      console.log(error);
    });

  }
});

app.listen(8888, () => console.log('Server started at port 8888.'));

// make multi-Client support