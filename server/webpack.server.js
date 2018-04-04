const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // bundle for Node.js, not browser
  target: 'node',
  // root file of server app
  entry: './src/index.js',
  // where to put outfile file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
