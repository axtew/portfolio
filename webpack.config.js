const webpack = require('webpack'),
      uglifyJS = require('uglifyjs-webpack-plugin'),
      path = require("path");

const config = {
	output: {
		filename: 'bundle.js'
	},
	resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
	plugins: [
		new uglifyJS ({
			sourceMap: true
		}),
		new webpack.ProvidePlugin ({
			$: 'jquery',
			jQuery: 'jquery'
    })
	]
};

module.exports = config;