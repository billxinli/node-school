'use strict';

var fs = require('fs')
  , args = process.argv

args.shift()
args.shift()

var fileName = args[0]

fs.readFile(fileName, function (err, data) {
  var content = data.toString()
  console.log(content.split('\n').length - 1)
})

