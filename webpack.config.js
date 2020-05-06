const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  //開発時はdevelopment
  mode: "development",

  // エントリーポイントの設定
  entry: "./src/js/index.js",

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
      //ejs
      {
        test: /\.ejs$/,
        use: "ejs-compiled-loader",
      },

      //scss
      {
        test: /\.scss/, //.scssのファイルを対象とする
        use: [
          "style-loader", //<link>にcssを展開する
          {
            loader: "css-loader", //cssをjsにバンドルする機能
            options: {
              url: false, //CSS内のurl()メソッドの取り込みを禁止する
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader", //scssをcssに変換する機能
          },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    open: true, //サーバー起動時に自動でブラウザを立ち上げる
  },
};
