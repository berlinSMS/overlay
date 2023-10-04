const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        js: './src/bsms-overlay.js', 
    },
    output: {
        filename: 'bsms-overlay.min.[name]',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/bsms-overlay.css', to: 'bsms-overlay.css' }, 
            ],
        }),
    ],
};
