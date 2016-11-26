//  Import node modules and dependencies
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'src');

//  Export the module
module.exports = {
    //  Webpack looks here for bundle starting point
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
           path.resolve(assetsPath,'index.js')],
    },
    //  Determines where application will be served
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: path.join(assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        //  Use babel to convert .jsx files to .js
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot-loader/webpack','babel'],
                include: [path.resolve(assetsPath)]
           }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : '#source-map',

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"development"'
        }
      }),
      new webpack.HotModuleReplacementPlugin();
    ]
};
