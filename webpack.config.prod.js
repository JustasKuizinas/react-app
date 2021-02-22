const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path:  path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './build'
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}