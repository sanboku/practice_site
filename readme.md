# エラー再現手順

1. package.json 作成
1. npm install を実行
1. src/ejs/index.ejs 作成
1. ejs のパーツ作成
1. src/ejs/temlates/\_header.ejs
1. src/ejs/temlates/\_footer.ejs
1. src/ejs/temlates/\_head.ejs <- 読み込めない
1. index.ejs に include
1. build 実行
