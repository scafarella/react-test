var path = require('path');
module.exports = {
    entry: './client/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'client'),
              loader: 'babel-loader' }
        ]
    }
};
