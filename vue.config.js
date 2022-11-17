const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
       favicon32: 'img/icons/wer.ico',
       favicon16: 'img/icons/wer.ico',
       favicon: 'img/icons/wer.ico'
    }
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
