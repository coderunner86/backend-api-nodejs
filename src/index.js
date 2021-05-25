const express = require('express');
const port = 5000;
const app = express();
app.get('/', (req, res) => {
    /* res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write("<html><head><meta charset='utf-8' /></head><body><h1>HOLA</h1></body></html>");
     res.end();*/
    res.status(200).send("<html><head><meta charset='utf-8' /></head><body><h1>HOLA</h1></body></html>");
});
app.listen(port, () => { console.log('PORT:' + port); });