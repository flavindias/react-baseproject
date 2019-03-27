const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = {
	devtool: 'source-map',
  entry:path.join(__dirname, 'src', 'index'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: { 
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
  	port: 8081,
    contentBase: './dist',
    hot: true
  }
};