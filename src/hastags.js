const express = require('express');
console.log("Hello this is a code for server creation");
//var hastags = require("./hastags");

//var http = require("http");
//server.listen(port);
const port = 2502;
const app = express();


app.listen(port, () => { console.log('listen on port' + port); });
var texto = "#SOSColombia";
var elemento = texto.slice(1);

function adicionar_texto(texto) {
    return elemento;

}
var respuesta = adicionar_texto(texto);
console.log("respuesta Ok", respuesta);