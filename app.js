const express = require('express');
const app = express();
const path = require('path');

//setup static folder
//middleware

// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two' },
    {id: 3, title: 'Post three'},
];
//hit this specific endpoint to get this data
app.get('/api/posts', (req, res) =>{

    res.json(posts);
    
});

// app.get('/', (req, res) =>{

//     res.sendFile(path.join(__dirname, 'public', 'index.html'));


// });

// app.get('/about', (req, res) =>{

//     res.sendFile(path.join(__dirname, 'public', 'about.html'));


// });

app.listen(2000, () =>console.log(`Server is running on port 2000`));