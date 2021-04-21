const { resolve } = require('path')
const changelogWebpackPlugin = require('./plugins/changelog-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new changelogWebpackPlugin()
    ],
    mode: 'development'
}
