const { exec } = require('child_process')

module.exports =
    class changelogWebpackPlugin {
        apply(compiler) {
            compiler.hooks.emit.tapAsync('changelogWebpackPlugin', (compilation, cb) => {
                compilation.assets['README.md'] = {
                    source: function () {
                        return '不会获取git log信息';
                    }
                }
                cb()
            })
        }
    }
