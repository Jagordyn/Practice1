const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(3000, (req, res) => {
   console.log(`Oh snaps, here we go again...`)
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

const post = app.post('/', (req, res) => {
    res.sendFile(`${__dirname}/return.html`)
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
})

app.get('/return', (req, res) => {
    res.sendFile(`${__dirname}/return.html`)
})

app.post('/return', (req, res) => {
    res.redirect(`/`);
})

app.post('/refresh', (req, res) => {
    res.redirect(`/return`);
})

app.post('/myInfo', (req, res) => {
    res.send(`<h1>Your first name is ${post.firstName} and your last name is ${post.lastName}</h1>`)
})
