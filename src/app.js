const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const Router = require('./routes/index.js');
const port = process.env.PORT;
const app = express();
require('dotenv').config();

app.use(express.json()); 

//Mongo connection
mongoose.connect(process.env.DATAB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('Connected to mongo...'))
.catch((err)=> console.log(err));

app.use(Router);

//server connection
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Server started on ${ port }...`);
});
