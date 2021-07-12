'use strict'

const LCrypt = require('lcrypt')
const config = require("../config/key");

const APP_KEY = config.APP_KEY
console.log(APP_KEY)
const lcrypt = new LCrypt(
    APP_KEY.startsWith('base64:') ? APP_KEY.substr(7) : APP_KEY
)

exports.encrypt = value => lcrypt.encode(value)

exports.decrypt = value => lcrypt.decode(value)