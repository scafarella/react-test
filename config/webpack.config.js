var path = require('path');
var appsrc = path.join(__dirname,'..');

module.exports = {
    entry: [
      require.resolve('isomorphic-fetch'),
      path.join(appsrc,'./client/main.js')
    ],
    output: {
        path: path.join(appsrc, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            // {
            //   test: path.join(__dirname, 'client'),
            //   loader: 'babel-loader',
            //   exclude: /node_modules/,
            //   query: {
            //     presets: ['es2015', 'react']
            //   }
            //  }
            {
              test: path.join(appsrc, 'client'),
              loader: 'babel-loader',
              include: appsrc,
              query: require('./babel')
            }
        ]
    }
};
