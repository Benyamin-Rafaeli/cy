const fs = require('fs-extra')
const path = require('path')
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
    on('task', percyHealthCheck)

    const processConfigName = (envConfig) => {
        const file = envConfig.env.name || 'default'
        console.log('config.env.name: ', file)
        return getConfigFile(file)
    }

    const getConfigFile = (file) => {
        const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
        return fs.readJson(pathToConfigFile)
    }

    // Return the configuration file details
    return processConfigName(config)
}
