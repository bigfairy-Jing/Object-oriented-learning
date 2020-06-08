const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: "./src/observer.1.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    open: true,
    port: 9000,
    proxy:{
      '/api/*':{
        target:'http://localhost:8850'
      }
    }
  }
}