const http = require("http");
const fs = require("fs");
const express = require('express');
const app = express();

app.use('/style', express.static(`public`));

http.createServer((request, response) => {
 fs.readFile("index.html", (error, data) => response.end(data));

})

let JSON = {
                name: get1,
                version: get2,
                count:get3,
                adaptation:get4
    };
    response.send(JSON);
    
listen(5501, () => { console.log("Сервер запущен по адресу http://localhost:5501");
console.log ("Номер порта 5501")});