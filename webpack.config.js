var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entry_path = path.resolve(__dirname, './app/src/js/index.js')
var output_path = path.resolve(__dirname, './app/build/');

module.exports = {
    entry: entry_path,
    output:{
        path: output_path,
        filename:'bundle.js',
        publicPath: '/app/build/'
    },
    devServer:{
        contentBase: __dirname,
    },
    devtool:'source-map',
    module:{
        loaders:[   
            { 
                test: /\.js$/,
                loader:'babel-loader', 
                exclude: path.resolve(__dirname,'./node_modules/'), 
                query:{
                        presets:['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                //loader:'css-loader',
                use:['css-loader']
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname,'./node_modules/'),
                use: [ 'html-loader' ]
            }
        ]
    }/*,
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]*/
};