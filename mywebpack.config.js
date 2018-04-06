var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: 'style.css',
});
var path = require('path');
module.exports = {
	entry: './src/js/app.js',
	output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js', publicPath: '/dist' },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				}),
			},
		],
	},
	plugins: [new UglifyJsPlugin(), extractPlugin],
};
