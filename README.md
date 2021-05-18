# webpack-rem2rpx-loader
Webpack loader

## 使用方法
```javascript
// vue.config.js
module.exports = merge({
    chainWebpack: (config) => {
        const rem2rpx = 'webpack-rem2rpx-loader'
        config.module
            .rule('myCssRule')
            .test(/\.scss$/)
            .use(rem2rpx)
            .loader(rem2rpx)
            .options({
                fromUnit: 'rem',
                toUnit: 'rpx',
                times: 100,
                unitPrecision: 0
            })
            .end()
    }
})
```