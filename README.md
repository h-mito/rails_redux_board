# Rails 5.0 React、Reduxを組み合わせた掲示板アプリ README

はじめに
Reduxを勉強して、ようやく大筋を理解し、Railsとの連携方法も分かったので、
Rails＋React+Redux＋Ajaxの組み合わせでちょっとした掲示板を作ってみました。

Rails＋React+Redux＋Ajaxの組み合わせで必要なノウハウはだいたい組み込まれていると思います。
対象とする読者は Railsはそこそこ知っている。Reactも勉強した。Reduxも勉強した、もしくは勉強中である
という方が対象です。

Things you may want to cover:

* Ruby version
 2.3 or higher

* System dependencies
 node.js,npm

* インストール方法

　- git clone https://github.com/h-mito/rails_redux_board
  - bundle install
  - npm install
  - DB作成、Seed導入
      - rake db:migrate
      - rake db:seed

  - 動作確認
  　  - rails s
      - http://localhost:3000/board/index

![Reduxで掲示板](http://beautifulajax.dip.jp/wp-content/uploads/2017/04/redux-30-806x393.png "あああああ")
* ...
