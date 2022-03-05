var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000,()=>{
    console.log('server is running at port:3000');
});