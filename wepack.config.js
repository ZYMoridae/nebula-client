const path = require('path');
var config = {
    entry: './main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('dist'),
      publicPath: '/'
    },
    devServer: {
       inline: true,
       port: 3000,
       hot: true,
       compress: true,
       https: false,
       historyApiFallback: true,
       proxy: {
          '/api': 'http://localhost:8080/nebula'
       }
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2017', 'react'],
                plugins: [
                  "transform-object-rest-spread",
                ]
             }
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 25000,
              },
            }
          },
          {
            test: /\.(jpg|png)$/,
            use: {
               loader: "file-loader",
               options: {
               name: "[path][name].[hash].[ext]",
               },
            }
         }
       ]
    },
    resolve: {
       extensions: ['.js', '.jsx', '.css']
    }
 }
 module.exports = config;