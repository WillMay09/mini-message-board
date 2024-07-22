const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const mongoose = require("mongoose");

//const messages = require('./routes/messageRoutes.js');

mongoose.set("strictQuery", false);
//username mayhoodwilliam
//password sink2327
const mongoDB = "mongodb+srv://mayhoodwilliam:sink2327@booklibrary.x8ludyp.mongodb.net/?retryWrites=true&w=majority&appName=bookLibrary";
main().catch((err)=>console.log(err));
async function main(){

    await mongoose.connect(mongoDB);
};



//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');
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

