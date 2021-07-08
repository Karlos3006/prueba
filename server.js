const app = require('./app/app');
const config=require('./app/configuracion/config');
const morgan= require('morgan');
const conexion=require('./app/configuracion/conexion');

app.use(morgan('dev'));

app.listen(config.PORT, function(erro){
    if(erro) return console.log(error);
    console.log(`Servidor en el puerto ${config.PORT}`);
});

conexion.connect();
