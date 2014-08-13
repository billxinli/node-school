'use strict';

var net = require('net')
  , strftime = require('strftime')
  , args = process.argv

args.shift()
args.shift()

var port = args[0]

var server = net.createServer(function (socket) {
  socket.end(strftime('%Y-%m-%d %H:%M\n', new Date()))
})

server.listen(port)
