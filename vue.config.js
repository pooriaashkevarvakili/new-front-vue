/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Hacoupian - Technology Dep.
  Author: Ahmadreza Azizan

==========================================================================================*/


module.exports = {
    publicPath: '/',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    css: {
    },
    configureWebpack: {
        output: {
            libraryExport: "default",
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
}

