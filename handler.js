'use strict'

var request = require('request')
// Your first function handler
module.exports.run = (event, context, cb) => {
  request.post(
    'http://requestb.in/yg78y3yg',
    { form: { timestamp: new Date() } },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        cb(null, { message: 'Success!', event })
      }
    }
  )
}
