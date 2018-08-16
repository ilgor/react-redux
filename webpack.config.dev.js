import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // Hot reloding for IE
        'webpack-hot-middleware/client?reload=true', // hot reload fails, reload
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // for Prod
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        ontentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
          {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
          {test: /(\.css)$/, loaders: ['style', 'css']},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};