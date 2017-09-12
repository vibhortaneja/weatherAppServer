let express = require('express');
let bodyParser = require('body-parser'); /*To perform different HTTP request*/
let mongoose = require('mongoose'); /*MingoDb data base*/
let cors = require('cors');
let api = require('./routes/api')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", api);
//app.use("/opp",operation);

app.listen(3003);

module.exports = app;
