var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 3000,
       hot: true,
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
                presets: ['es2017', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;