const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const Router = require('./routes/index.js');
const port = process.env.PORT;
const app = express();
require('dotenv').config();

//bodyParser
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

//Mongo
mongoose.connect(process.env.DATAB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('connected to mongo'))
.catch((err)=> console.log(err));

app.use(Router);

//server
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Server started on ${ port }...`);
});
