var glob_entries = require('webpack-glob-entries');
var values = require('object.values');

var entries = values(glob_entries('themes/colbin8r-theme/source/scripts/**/*.js'));

module.exports = {
	entry: entries,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};

