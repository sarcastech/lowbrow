'use strict'

let fs = require('fs')
let exec = require('child_process').exec
let noop = function () {}

function lowbrow (fileName, site, callback) {
  let regex = new RegExp(`^${site}`)
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }

    let dataArray = data.split('\n')
    let ip = dataArray.find(function (domain) {
      return domain.match(regex)
    })

    exec(`open http://${ip.split(':')[1]}`, callback || noop)
  })
}

module.exports = lowbrow
