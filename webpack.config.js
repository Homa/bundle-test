const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js'
    },
    mode: 'production',
    optimization: {
        minimize: false
    }
}
