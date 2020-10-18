const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
require('dotenv').config();
const port = process.env.PORT;
const app = express();

//Mongo
mongoose.connect(process.env.DATAB_URL, { useNewUrlParser: true, useUnifiedTopology : true })
.then(() => console.log('connected to Mongo'))
.catch((err)=> console.log(err));

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//server
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Server started on ${ port }...`);
});
