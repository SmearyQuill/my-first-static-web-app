const exp = require('constants');
const express = require('express');
const { appendFile } = require('fs');
const http = require('http');
const path = require('path');

const app = express();

app.post('/send',(req, res) => {
    res.json({
        'statusCode': 200,
        'statusMessage': 'SUCCESS'
    });
});

app.listen(3000, (req,res) => {
    console.log('Running');
});