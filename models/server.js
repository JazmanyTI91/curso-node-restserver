const express = require('express')
const cors = require('cors')


class Server {


    constructor() {

        //Creamos la aplicacion de express
        this.app = express();

        //identificar que rutas tenemos en la aplicación 
        this.usuariosPath = '/api/usuarios';

        //middleWares
        this.middleWares();

        //Rutas de mi aplicacion
        this.routes();
    }


    middleWares() {

        //cors 
        this.app.use( cors() );

        //parsear y leer un body de una petición 
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }


    //Método para definir nuestras rutas
    routes() {
       //Configuramos el router, ahora es el path
        this.app.use( this.usuariosPath, require('../routes/usuarios') );

    }


    //Método para escuchar 
    //El puerto se encuentra definido en .env
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server corriendo en puerto', process.env.PORT);
        });
    }


}







module.exports = Server