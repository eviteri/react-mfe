const { dependencies } = require('./package.json')

module.exports = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteRunTime': './src/bootstrap'
  },
  shared: {
    ...dependencies,
    react: {
      requiredVersion: dependencies['react'],
      import: 'react', // the "react" package will be used a provided and fallback module
      shareKey: 'react', // under this name the shared module will be placed in the share scope
      shareScope: 'default', // share scope with this name will be used
      singleton: true // only a single version of the shared module is allowed
    },
    'react-dom': {
      singleton: true, // only a single version of the shared module is allowed
      requiredVersion: dependencies['react-dom']
    }
  }
}
