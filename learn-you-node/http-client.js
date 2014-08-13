'use strict';

var http = require('http')
  , args = process.argv

args.shift()
args.shift()

var url = args[0]

http.get(url, function (response) {
  response.setEncoding('utf8')
  response.on('data', function (data) {
    console.log(data)
  })
  response.on('error', function (data) {
    console.error(data)
  })
})