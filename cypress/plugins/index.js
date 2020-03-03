const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck);
  on('file:preprocessor', cucumber());

  // on('before:browser:launch', (browser = {}, args) => {
  //   if (browser.name === 'chrome') {
  //     // args.push('--start-fullscreen')
  //     // args.push('--incognito')
  //     return args
  //   }
  //   if (browser.name === 'electron') {
  //     //   args['fullscreen'] = true
  //     return args
  //   }
  // });

  function processConfigName(on, config) {
    const file = config.env.name || 'default'
    console.log('==========> this is file => ', file)
    return getConfigFile(file)
  }

  function getConfigFile(file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    console.log('==========> this is pathToConfigFile => ', pathToConfigFile)
    return fs.readJson(pathToConfigFile)
  }

  // Return the configuration file details
  // console.log(config)
  return processConfigName(on, config);
}