var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require("path");
var bootstrapEntryPoints = require ('./webpack.bootstrap.config');

var isProd = process.env.NODE_ENV === 'production';// true or false
var  cssDev = ['style-loader','css-loader','sass-loader'];

var cssProd =  ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});

var cssConfig = isProd ? cssProd : cssDev;
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports={
    entry: {
        app:'./src/app.js',
        bootstrap:bootstrapConfig,

    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[

            {
                test:/\.scss$/,
                use:cssConfig





            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:'file-loader?name=images/[name].[ext]'
               // use:'file-loader?name=[path][name].[ext]&outputPath=images/'
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].{ext}' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].{ext}' },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
    ]

    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot:true,
        port: 9000,
        stats:"errors-only",
        open:true,
        openPage: '',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify:{
                collapseWhitespace:true

            },
            hash:true,

            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),


        new ExtractTextPlugin({
            filename: '/css/[name}.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()


    ]
}