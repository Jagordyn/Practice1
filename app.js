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

app.post('/', (req, res) => {
    // res.write(`<h1>${req.body.firstName}</h1>`)
    res.sendFile(`${__dirname}/return.html`)
})

app.get('/return', (req, res) => {
    res.sendFile(`${__dirname}/return.html`)
})

app.post('/return', (req, res) => {
    res.redirect(`/`);
})

