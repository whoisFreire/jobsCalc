const express = require('express');
const server = express();
const routes = require('./routes');

// usando view engine
server.set('view engine', 'ejs');

//habilitando arquivos statics
server.use(express.static('public'));

// rotas
server.use(routes);

server.listen(3000, () => console.log('Rodando servidor!'));
