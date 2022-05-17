const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vue',
  transpileDependencies: [
    'vuetify'
  ]
})
