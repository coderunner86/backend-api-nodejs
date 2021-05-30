const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');
//const phone = require('phone');
const phone = 3245098765;
const country = 'colombia';
const port = 5000;
const app = express();
app.get('/', (req, res) => {
    /* res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write("<html><head><meta chnpm run earset='utf-8' /></head><body><h1>
     HOLA, VAS A CUMPLIR TUS SUEÑOS, TENER MUCHO DINERO Y VIAJARÁS POR EL MUNDO
     </h1></body></html>");
     res.end();*/
    res.status(200).send("<html><head><meta charset='utf-8' /></head><body><h1>HOLA, VAS A CUMPLIR TUS SUEÑOS, TENER MUCHO DINERO Y VIAJARÁS POR EL MUNDO</h1></body></html>");
});
app.get('/info', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ version: "0.0.1", appName: "Curso Node.js" }));
});
app.get('/detail', (req, res) => {
    res.status(200).send("Piensa positivo");
});
/*
app.get('/phone', (req, res) => {
    try {
        const urlData = url.parse(req.url, true);
        //const query = urlData.query;
        const result = (phone);
        res.setHeader("Content-Type", "application/json");
        res.status(JSON.stringify(result));
    } catch (e) {
        res.status(400).send(e.message);
    }

});*/
app.get("*", (req, res) => {
    res.status(404).send("¿En realidad creíste que aquí había algo? ¡Piensa Mark, piensa!")
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.post("/login", (req, res) => {
    console.log(req.body);
    const { Username, password } = req.body;
    if (Username === "Coderunner" && password === "Decoderunner") {
        res.send({ status: "Datos Correctos" })
    } else {
        res.status(401).send("Acceso denegado");
    }

})

app.listen(port, () => { console.log('PORT:' + port); });