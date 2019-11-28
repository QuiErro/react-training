const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}, 
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(eot|svg|ttf|woff|woff2|png)\w*/, use: 'file-loader'}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    mode: 'development' 
};