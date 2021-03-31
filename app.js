const Server = require('./models/server');

//sirve para tomar toda la configuracion del archivo env
require('dotenv').config();


const server = new Server();

server.listen();