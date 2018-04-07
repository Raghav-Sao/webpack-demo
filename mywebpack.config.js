var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: 'style.css',
});
var path = require('path');
module.exports = {
	entry: './src/js/app.js',
	output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				}),
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	plugins: [
		new UglifyJsPlugin(),
		extractPlugin,
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};

/*
HtmlWebpackPlugin: to add html in dist and include all style and css
*/
