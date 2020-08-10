const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js',
  // },
  // resolve: {
  //   extensions: ['.js'],
  // },
  module: {
    rules: [
      {
        test: /.pug$/,
        use: ['pug-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'index.pug'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'system.pug'),
      filename: 'sistema.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'components.pug'),
      filename: 'componentes.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'foundations.pug'),
      filename: 'foundations.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'iteration.pug'),
      filename: 'iteraciones.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/pages', 'values.pug'),
      filename: 'valores.html'
    }),
  ]
}