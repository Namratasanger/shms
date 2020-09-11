<<<<<<< HEAD
const {createServer} = require("http");
const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express()

app.use(express.static(path.resolve(__dirname,'build')))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
})

const server = createServer(app);
server.listen(port,err =>{
    if(err) throw err;
    console.log("Server Started!")
=======
const {createServer} = require("http");
const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express()

app.use(express.static(path.resolve(__dirname,'build')))

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
})

const server = createServer(app);
server.listen(port,err =>{
    if(err) throw err;
    console.log("Server Started!")
>>>>>>> f3a7acc9258ea8be8152b6ba15c47f758d9970e0
})