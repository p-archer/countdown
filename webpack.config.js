const config = {
	entry: __dirname + '/content/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	target: 'electron',
	module: {
		loaders: [{
			test: /.js$/,
			exclude: '/node_modules/',
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /.less$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'less-loader'
			}]
		}]
	},
	devtool: 'inline-source-map'
};

module.exports = config;
