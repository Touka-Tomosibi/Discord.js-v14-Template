# Discordjs-v14-Templat

Discord.js v14のテンプレートになります。

最後に重要なことが書いてあるので最後まで読んで下さい。

<br>

## 概要
Node.jsのモジュールであるDiscord.jsのバージョン14を使用したテンプレートです。

中身をコピー&ペースト

Discord.jsの公式ガイドに準拠した内容なため、公式ガイドを見ることで解決できることが多いです。

ただし、制作時期が1～2年前のため最新の状況とは異なっている可能性があります。

公式ガイドは [__こちら__](https://discordjs.guide/legacy)

<br>

## 必要なもの
1. **PC** ※1
1. **Node.js** 
1. **テキストエディタ** ※2

※1 Windows11でのみ動作確認しています。Macなどでも動くとは思いますが私は確認していません。

※2 私はVisual Studio Codeを使用しましたが、極論メモ帳でも大丈夫です。

<br>

## テンプレートに入っているもの

1. **index.js**
: 必須

1. **deploy-commands.js** 
: 必須

1. events / **interactionCreate.js** , **ready.js**
: 必須

1. events / **code.js** , **GoodMorning.js**
: 任意

1. commands / fun / **hello.js** , **ping.js** , **dice.js** , **sdice.js**
: 任意

必須 : 入れないと動かない

任意 : 入れなくても動く、こういう動きができるというサンプル

<br>

## コードを打つまで
### BOTの外側を作成する
[Discord Developer Portal](https://discord.com/developers)にアクセスする。

Discordにログインする。(いつも使用しているもので大丈夫です)

アプリケーションページから右上の新しいアプリケーションにて作成する。

一般情報ページのアプリIDを保管しておく。

左側にあるBotページにてアイコンや、ユーザー名を設定する。

同ページ内にあるトークンの項目からtokenを作成し、自分で保管をする。

BotページにてServer Members Intent, Message Content Intentを有効化する。

OAuth2ページのOAuth2 URLジェネレーターにてリンクを作成してサーバーに追加する。

(ジェネレーター内の左側にあるbotをクリックするとbotの権限がでてくるのでそこで権限を設定したら最下部のリンクから入れたいサーバーに追加する)

<br>

### いろいろなものをインストールする
[Node.js](https://nodejs.org/ja/download)にてダウンロードし、エクスプローラーからインストールする。

(ページ内の初期状態のものでおそらく大丈夫です。何か不具合が起きた場合はv24.14.1をインストールしてください)

[Visual Studio Code](https://code.visualstudio.com/download)をインストールする(任意)

<br>

### Node.jsの準備
BOTのファイルを入れたいフォルダを作成する。

タスクバー検索欄にてcmdと入力し、コマンドプロンプトを開く。

cmdにて作成したフォルダに移動する。
(例 : cd C:\bot)

移動を確認したら、**npm init -y**と**npm i discord.js**を実行する。

<br>

### コードを書く
上記の[テンプレートに入っているもの](https://github.com/Touka-Tomosibi/Discord.js-v14-Template/blob/main/README.md#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%81%AB%E5%85%A5%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%82%82%E3%81%AE)にて必須と書かれたものと同じものを作成し、中身をコピー&ペーストする

<br>

## 最後に
こんなもの作ってるくせにindex.jsとかの内容をあまり理解していないらしいので安全性などの保障はしません。
