const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        js: './src/bsms-overlay.js',  // Haupt-JavaScript-Datei Ihres Plugins
    },
    output: {
        filename: 'bsms-overlay.min.[name]', // Eindeutiger Ausgabedateiname für Chunks
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/bsms-overlay.css', to: 'bsms-overlay.min.css' }, 
            ],
        }),
    ],
};
