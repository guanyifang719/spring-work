const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve(__dirname, 'src'),
                use: [{
                    loader: resolve('loader', 'replace-loader.js'),
                    options: {
                        before: 'redrock',
                        last: 'Redrock'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ tamplate: './src/index.html' })
    ],
    mode: 'production'
}
