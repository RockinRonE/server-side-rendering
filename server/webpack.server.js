const path = require('path')

module.exports = {
  // bundle for Node.js, not browser
  target: 'node',
  // root file of server app
  entry: './src/index.js',
  // where to put outfile file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // run babel on files
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}
