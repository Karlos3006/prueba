const express=require('express');
const ControladorDulces=require('../controlador/ControladorDulces');

const Router =express.Router();

Router.get('/',ControladorDulces.index)
.post('/',ControladorDulces.crear)
.get('/:key/:value',ControladorDulces.buscar,ControladorDulces.mostrar)
.put('/:key/:value',ControladorDulces.buscar,ControladorDulces.actualizar)
.delete('/:key/:value',ControladorDulces.buscar,ControladorDulces.eliminar);

module.exports=Router;

console.log('Dulces');