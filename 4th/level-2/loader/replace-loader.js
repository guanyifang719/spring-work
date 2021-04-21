const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const { before, last } = loaderUtils.getOptions(this)
    return source.replace(before, last)
}
