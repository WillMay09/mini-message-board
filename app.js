const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const messages = require('./routes/messageRoutes.js')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two' },
    {id: 3, title: 'Post three'},
];


//routes
app.use('/', indexRouter);
app.use('/catalog', catalogRouter);
app.use('/users', usersRouter.js);




module.exports = app;


// //Server
// app.set('port', PORT);

// const server = http.createServer(app);
// //create http server with the app as the listener

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

