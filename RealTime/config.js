'use strict'

module.exports = {
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'YOUR_GMAIL_ADDRESS',
      pass: 'YOUR_GMAIL_PASSWORD'
    }
  },
  dbConnstring: 'mongodb://127.0.0.1:27017/codeshare',
  sessionKey: 'HaloCode4Share'
}
