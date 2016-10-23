'use strict'

let fs = require('fs')
let exec = require('child_process').exec

function lowbrow (fileName, site) {
  let regex = new RegExp(`^${site}`)
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.log('error: ', err)
      return false
    }

    let dataArray = data.split('\n')
    let ip = dataArray.find(function (domain) {
      return domain.match(regex)
    })

    exec(`open http://${ip.split(': ')[1]}`, function (err, stdout) {
      if (err) {
        console.log('Exec Error: ', err)
        return false
      }

      console.log(`opened ${site}`)
    })
  })
}

module.exports = lowbrow
