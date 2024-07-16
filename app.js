const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
//const messages = require('./routes/messageRoutes.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

var indexRouter = require("./routes/index.js");
var usersRouter = require("./routes/users.js");
var catalogRouter = require("./routes/catalog.js");

//middleware chain

//routes
 app.use('/', indexRouter);
 app.use('/users', usersRouter);
 app.use('/catalog', catalogRouter);



module.exports = app;


// //Server
// app.set('port', PORT);

// const server = http.createServer(app);
// //create http server with the app as the listener

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

