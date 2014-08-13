'use strict';

var args = process.argv
  , total = 0
args.shift()
args.shift()

for (var i = 0; i < args.length; i++) {
  total += parseInt(args[i])
}
console.log(total)
