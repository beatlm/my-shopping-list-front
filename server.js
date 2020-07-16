const express = require('express');
const http = require('http')
const path = require('path');


const app = express();

app.use(express.static(__dirname+'/dist/my-shopping-list'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/my-shopping-list/index.html'));
});

app.listen(process.env.PORT || 8080);