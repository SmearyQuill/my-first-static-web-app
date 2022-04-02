const express = require('express');
const http = require('http');
const path = require('path');
var cors = require('cors')

const app = express();

const port = process.env.PORT || 3001;

var allowedOrigins = ['http://localhost:3000',
                      'https://main.radarcontroltotal.com/'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
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
