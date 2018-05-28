'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  ENV_CONFIG: '"dev"',
  NODE_ENV: '"development"',
  BASE_URL: 'http://mc.data/api-dev'
})
