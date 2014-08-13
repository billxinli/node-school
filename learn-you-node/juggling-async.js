'use strict';

var http = require('http')
  , args = process.argv

args.shift()
args.shift()

function collect(urls) {
  var url = urls.shift()
  http.get(url, function (response) {
    response.setEncoding('utf8')
    var chunks = []
    response.on('data', function (data) {
      chunks.push(data)
    })
    response.on('error', function (data) {
      console.error(data)
    })
    response.on('end', function () {
      console.log(chunks.join(''))
      collect(urls)
    })
  })
}

collect(args)
