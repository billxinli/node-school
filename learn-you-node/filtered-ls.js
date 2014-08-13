'use strict';

var fs = require('fs')
  , path = require('path')
  , args = process.argv

args.shift()
args.shift()

var dirPath = args[0]
  , ext = '.' + args[1]
fs.readdir(dirPath, function (err, data) {
  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i]) === ext) {
      console.log(data[i])
    }
  }
})