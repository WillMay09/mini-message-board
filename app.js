const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const messages = require('./routes/messageRoutes.js')
const PORT = process.env.PORT || 8000
app.set('view engine', 'ejs');

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two' },
    {id: 3, title: 'Post three'},
];


//routes
app.use('/home', messages)







//Server
app.set('port', PORT);

const server = http.createServer(app);
//create http server with the app as the listener

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

