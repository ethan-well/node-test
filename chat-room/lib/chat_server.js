var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function(server) {
  io = socketio.listen(server);
  id.set('log level', 1);

  io.sockets.on('connection', function (socket) {
    guestNumber = assignGuestName(socket, guestNumber,
      nickNames, namesUsed);

      joinRoom(socket, 'Lobby');

      handleMessageBroadCasting(socket, nickNames);
      handleNameChangeAttempts(socket, nickNames, namesUsed);
      handleRoomJoining(socket);

      socket.on('rooms', function() {
        socket.emit('rooms', io.socket.manager.rooms);
      });

      handleClientDisconnection(socket, nickNames, namesUsed);
  });
};