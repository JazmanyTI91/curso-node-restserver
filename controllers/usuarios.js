const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        query
    });
}


const usuariosPut = (req, res = response) => {

    //obtenemos el request de la petición
    const { id } = req.param;

    res.json({
        msg: 'put API - controlador', 
        id
    });
}


const usuariosPost = (req, res = response) => {
    
    //extraemos el body que viene en la petición
    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}








module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}