const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '/../public');
var app = express();
const port = process.env.POST || 3000

app.use(express.static(publicPath))

app.listen(port,()=>{
    console.log('端口:$(port)已開啟');
})