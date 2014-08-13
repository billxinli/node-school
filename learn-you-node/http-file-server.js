'use strict';

var http = require('http')
  , fs = require('fs')
  , args = process.argv

args.shift()
args.shift()

var port = args[0]
  , fileLocation = args[1]

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  var stream = fs.createReadStream(fileLocation)
  stream.pipe(res)
})

server.listen(port)
