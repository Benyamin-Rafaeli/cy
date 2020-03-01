const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck);
  on('file:preprocessor', cucumber());

  console.log(config)
  const file = config.env.name || 'default'
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)

  // on('before:browser:launch', (browser = {}, args) => {
  //   if (browser.name === 'chrome') {
  //     // args.push('--start-fullscreen')
  //     // args.push('--incognito')
  //     return args
  //   }
  //   // if (browser.name === 'electron') {
  //   //   args['fullscreen'] = true
  //   //   return args
  //   // }
  // });
  // function processConfigName(on, config) {
  //   return getConfigFile(file).then(function (file) {
  //     // if (config.env.name === 'dev')
  //     //   file.baseUrl = file.baseUrl + process.env.URI_ROOT
  //     // return file object
  //     return file
  //   })
  // };
  // function getConfigFile(file) {
  //   const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  //   return fs.readJson(pathToConfigFile)
  // };
  // // Return the configuration file details
  // return processConfigName(on, config);
  // return config
}