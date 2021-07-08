const express = require('express');
const rutasVinos=require('./rutas/rutasVino');
const rutasDulces=require('./rutas/rutasDulce');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/vinos',rutasVinos);
app.use('/dulces',rutasDulces);

module.exports= app;