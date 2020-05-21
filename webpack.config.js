//to work with directories
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//the main configuration obj:
module.exports = {

    //path to endpoint
    entry:'./src/javascript/index.js',

    //path & filename of result bundle
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bandle.js'
    },

    modules: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        
        new MiniCssExtractPlugin ({
            filename: "bundle.css"
        })
    ]

    mode: 'development'

};