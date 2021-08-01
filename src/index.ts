import express from 'express';
import {urlencoded,json} from 'body-parser';
import {Application, Request, Response} from 'express';

const port = 5000;
const app:Application = express();          

import apiV1 from './routes/v1';

app.use(urlencoded({ extended: false }))
app.use(json());

apiV1(app);

app.use((req:Request, res:Response) => {
    res.status(404).send("¿En realidad creíste que aquí había algo? ¡Piensa Mark, piensa!")
});


app.listen(port, () => { console.log('PORT:' + port); });