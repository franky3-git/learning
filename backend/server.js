global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;
const connect = require('./db');

app.set('port', port);
const server = http.createServer(app);

server.on('listening', (err) => {
	if(err) return 'Something bad happend when starting the server';
	console.log('Server is running on port ' + port)
})

connect(() => {
	server.listen(port)
})
