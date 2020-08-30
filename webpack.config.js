const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: {
    components: path.resolve(__dirname, 'src/pages/components/components.js'),
    foundations: path.resolve(__dirname, 'src/pages/foundations/foundations.js'),
    index: path.resolve(__dirname, 'src/pages/index/index.js'),
    iterations: path.resolve(__dirname, 'src/pages/iterations/iterations.js'),
    system: path.resolve(__dirname, 'src/pages/system/system.js'),
    values: path.resolve(__dirname, 'src/pages/values/values.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/components.html'),
      filename: 'sections/componentes.html',
      chunks: ['components'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/foundations.html'),
      filename: 'sections/fundamentos.html',
      chunks: ['foundations'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/iterations.html'),
      filename: 'sections/iteraciones.html',
      chunks: ['iterations'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/system.html'),
      filename: 'sections/sistema.html',
      chunks: ['system'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/values.html'),
      filename: 'sections/valores.html',
      chunks: ['values'],
    }),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src/pages'),
    watchContentBase: true,
    port: 2001,
    open: true,
    index: 'index.html',
    watchOptions: {
      poll: 420,
    },
  },
};
