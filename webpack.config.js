const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebPackPlugin = require( "html-webpack-plugin" );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join( __dirname, '/dist' ),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: [ '.js', '.scss', '.css' ],
    alias: {
      slds: path.join( __dirname,
        'node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css' ),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/index.html' },
      ],
    },
    index: 'index.html',
  },
  stats: {
    builtAt: true,
    cached: true,
    env: true,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join( __dirname, 'src' ),
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|woff|woff2|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
    ]
  },
  plugins: [
    // Enable/Disable the plugins as you need.
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin( {
      template: './src/index.html',
      filename: './index.html',
    } ),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /en/, // /en|de|fr|es|pl|ua|ru/
    ),
    new CopyWebpackPlugin( [
      {
        from: 'node_modules/@salesforce-ux/design-system/assets/icons',
        to: 'slds-icons',
        ignore: [ '*.png',
          'action/*.*',
          'custom/*.*',
          'doctype/*.*',
          'standard/*.*',
          'utility/*.*',
          '*.txt',
          '*.md',
        ],
      },
    ] ),
  ],
};