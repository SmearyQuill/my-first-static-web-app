const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

const port = process.env.PORT || 3001;


app.use(express.json({ limit:"100mb"}));

app.post('/api/send',(req, res) => {
    console.log(req.body);
    res.json({
      'statusCode': 200,
      'statusMessage': 'SUCCESS'
  });
});


app.use(express.static(__dirname+'/dist/radar-web-page'));

app.route('/*').get(function (req, res) {
  return res.sendFile(path.join(__dirname+'/dist/radar-web-page'+'/index.html'));
});

const server = http.createServer(app);


server.listen(port,() => console.log(__dirname));
