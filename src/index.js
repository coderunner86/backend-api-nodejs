const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
const apiV1 = require('./routes/v1')

app.get("*", (req, res) => {
    res.status(404).send("¿En realidad creíste que aquí había algo? ¡Piensa Mark, piensa!")
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


apiV1(app);
app.listen(port, () => { console.log('PORT:' + port); });