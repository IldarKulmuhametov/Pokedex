var path = require('path');


var config = {
  entry: __dirname + '/app/app.js',
  target: 'web',
  output: {
    path: __dirname + '/public/src/build',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;