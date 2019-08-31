const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
// const MongoClient = require('mongodb').MongoClient;
const app = express()

const client = path.join(__dirname, '../client')


app.use(express.static(client))


const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`Данные отправлены на сервер: ${JSON.stringify(request.body)}`);
});



app.listen(3000, () => {
  console.log('start')
})