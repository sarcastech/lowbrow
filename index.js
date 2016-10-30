'use strict'

const WRITABLE = require('stream').Writable
const EXEC = require('child_process').exec
let writeStream = new WRITABLE()

writeStream._write = function (chunk, encoding, callback) {
  EXEC(`open http://${chunk.toString()}`, callback)
}

module.exports = writeStream
