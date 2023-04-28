const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports= {
    entry: './src/index.js',
    
    mode: 'development',

    output: {
        path: path.join(__dirname, '/dist_react'), 
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,
              'css-loader', 
              'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'imagenes/'
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    };