'use strict'

const request = require('request')

module.exports.run = (event, context, callback) => {
  request.post('http://requestb.in/sa6rahsa', {
    form: { timestamp: new Date() } },
    (err, response, body) => {
      if (! err) {
        callback(null, { message: 'We ran your scheduled job', body })
      } else {
        callback(true, err)
      }
    }
  )
}
