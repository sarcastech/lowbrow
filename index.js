'use strict'

const WRITABLE = require('stream').Writable
const SPAWN = require('child_process').spawn
let writeStream = new WRITABLE()

writeStream._write = function (chunk, encoding, done) {
  SPAWN('open', [`http://${chunk.toString()}`])
  writeStream.end()
  done()
}

module.exports = writeStream
