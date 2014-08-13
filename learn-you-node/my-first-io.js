'use strict';

var fs = require('fs')
  , args = process.argv

args.shift()
args.shift()

var fileName = args[0]
  , contentBuffer = fs.readFileSync(fileName)
  , content = contentBuffer.toString()

console.log(content.split('\n').length - 1)
