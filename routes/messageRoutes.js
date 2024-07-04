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


router.get('/router',(req, res, next) =>{




});

module.exports = router;