'use strict'
const loaderUtils = require('loader-utils')
const merge = require('webpack-merge')
const defaultConfig = {
    fromUnit: 'rpx',
    toUnit: 'rem',
    times: 100,
    unitPrecision: 0
}

module.exports = function (source) {
    const options = merge(defaultConfig, loaderUtils.getOptions(this))
    const reg = new RegExp('(\\b(\\d+(\\.\\d+)?)|(\\.\\d+))' + options.fromUnit + '\\b', 'g')
    return source.replace(reg, function($0, $1) {
        let v = Number($1) * Number(options.times);
        let u = parseInt(options.unitPrecision)
        if (u) {
            return v.toFixed(u) + options.toUnit
        }
        return v + options.toUnit
    })
}