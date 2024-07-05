const express = require('express');
const router = express.Router();

const messages = [
{
    text: "Hi there!",
    user: "Amando",
    added: new Date()


},
{
    text: "Hello World!",
    user: "Charles",
    added: new Date()

}
];

//GET HomePage
router.get('/',(req, res, next) =>{

    res.render("index.ejs", {title: "Mini-Message-board", messages: messages});


});


//GET formPage
router.get('/new', (req, res, next) => {

    res.render("new.ejs");




});


router.post('/new', (req, res, next) =>{

    const newMessage = {

        text: req.body.text,
        user: req.body.user,
        added: new Date()


    }
    
    messages.push(newMessage);
    console.log(messages);


});

module.exports = router;