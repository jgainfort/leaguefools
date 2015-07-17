var events = require('../config/events');
var self;

function SocketIO (io) {
	self = this;
	self.init(io);
}

SocketIO.prototype = {
	io: undefined,

	init: function(io) {
		self.io = io;
		self.initSocketIO();
	},

	initSocketIO: function() {
		self.io.on('connection', function(socket) {
			console.log('Connected to socket: ', socket);
			// Socket routes go here
			socket.on(events.summonerEvents.GET_SUMMONER_BY_NAME, function(data) {
				if (data) {
					console.log('Data: ', data);
				}
			});
			
			socket.on('disconnect', function() {
				console.log('Disconnected from socket');
			});
		});
	}
};

exports = module.exports = SocketIO;

exports.create = function(io) {
	return new SocketIO(io);
};