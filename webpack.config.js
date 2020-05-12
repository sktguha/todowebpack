const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
      historyApiFallback: true
    },
  module: {
//     resolve: {
//       extensions:['.scss','.css'],
//       alias : {
//         slds: path.join( __dirname,
// 'node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css' )
//       }
//     },
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};