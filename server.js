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
})