var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: '[name]-style.css',
});
var path = require('path');
module.exports = {
	entry: {
		main: './src/js/app.js',
		clickGame: './src/js/click-game.js',
	},
	output: { path: path.resolve(__dirname, 'dist'), filename: '[name]-bundle.js' },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
					filename: '[name]-style.css',
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
			filename: 'index.html',
			template: 'src/index.html',
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({
			filename: 'click-game.html',
			template: 'src/click-game.html',
			chunks: ['clickGame'],
		}),
	],
};

/*
HtmlWebpackPlugin: to add html in dist and include all style and css
*/
