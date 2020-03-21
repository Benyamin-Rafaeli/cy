const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck);
  on('file:preprocessor', cucumber());

  const processConfigName = (envConfig) => {
    const file = envConfig.env.name || 'default'
    console.log('config.env.name: ', file)
    return getConfigFile(file)
  };

  const getConfigFile = (file) => {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
  };

  // Return the configuration file details
  return processConfigName(config);

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

}
