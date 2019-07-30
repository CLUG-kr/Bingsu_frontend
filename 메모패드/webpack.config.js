var webpack = require('webpack');

module.exports = {
    entry: [
	    './src/index.js',
	'./src/style.css'
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'style!css-loader'
		    ['babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
	resolve:{
		root: path.resolve('.src')
	}
};
