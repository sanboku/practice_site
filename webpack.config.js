const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",

  // エントリーポイントの設定
  entry: `./src/ejs/index.ejs`,

  // output: {
  //pluginのデフォルトの出力先を使用するためoutputは使わない
  // },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/ejs/index.ejs",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: "ejs-compiled-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true, //サーバー起動時に自動でブラウザを立ち上げる
  },
};
