const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path');


module.exports = {
	entry: ['babel-polyfill', './handler.js'],
	target: 'node',
	externals: [
		nodeExternals(),
	],
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, './.webpack'),
		filename: 'handler.js',
		sourceMapFilename: 'handler.map.js',
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new CompressionPlugin({ asset: '[path].gz[query]', algorithm: 'gzip', test: /\.js/, threshold: 10240, minRatio: 0 }),
	],
};
