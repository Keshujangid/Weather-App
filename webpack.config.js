const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',

};

