const express = require('express');
const cors = (require("cors"))

const app = express();
app.use(cors());
app.use(express.json({ limit:"100mb"}));

app.post('/send',(req, res) => {
    console.log(req.body);
    res.json({
        'statusCode': 200,
        'statusMessage': 'SUCCESS'
    });
});

app.listen(3000, (req,res) => {
    console.log('Running');
});