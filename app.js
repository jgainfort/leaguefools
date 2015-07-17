/// <reference path="typings/node/node.d.ts"/>

var app = require('koa')();
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
var serve = require('koa-static');
var logger = require('koa-logger');

app.use(logger());
app.use(serve(__dirname + '/public'));

var socketIo = require('./routes/socket-io').create(io);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('listening on port ' + port);