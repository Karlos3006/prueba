const express=require('express');
const ControladorVinos=require('../controlador/ControladorVinos');

const Router =express.Router();

Router.get('/',ControladorVinos.index)
.post('/',ControladorVinos.crear)
.get('/:key/:value',ControladorVinos.buscar,ControladorVinos.mostrar)
.put('/:key/:value',ControladorVinos.buscar,ControladorVinos.actualizar)
.delete('/:key/:value',ControladorVinos.buscar,ControladorVinos.eliminar);

module.exports=Router;

console.log('Vinos');