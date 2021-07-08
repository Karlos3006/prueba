const ModeloDulces =require('../modelos/ModeloDulces');

function index(req,res){
    console.log('ok');
    ModeloDulces.find({})
    .then(dulces=>{
        if(dulces.length) return res.status(200).send({dulces});
        return res.status(204).send({message:'No hay datos que mostrar'});
    }).catch(error=>res.status(500).send(error));
}

function crear(req,res){
    new ModeloDulces(req.body).save()
    .then(dulces=> res.status(200).send({dulces}))
    .catch(error=>res.status(500).send({error}));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    ModeloDulces.find(consulta).then(dulces=>{
        if(!dulces.length) return next();
        req.body.dulces=dulces;
        return next();
    }).catch(error=>{req.body.error=error;
        next();
    })
}
function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message:'No se encontro el producto'});
    let dulces=req.body.dulces;
    return res.status(200).send({dulces});
}

function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message:'No se puede actualizar'});
    let dulceObj= req.body.dulces[0];
    dulceObj=Object.assign(dulceObj,req.body);
    dulceObj.save().then(dulcesAlta=>{
    res.status(200).send({message:'El registro se actualizo correctamente', dulcesAlta});
    }).catch(error=>res.status(500).send({error}));
}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.dulces) return res.status(404).send({message:'No se puede eliminar el registro'});
    req.body.dulces[0].remove().then(dulcesBaja=>{
     res.status(200).send({message:'El registro se elimino correctamente', dulcesBaja});
    }).catch(error=>res.status(500).send({error}));
}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}