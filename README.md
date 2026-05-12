# Discordjs-v14-Templat

Discord.js v14のテンプレートになります

## 概要
Node.jsのモジュールであるDiscord.jsのバージョン14を使用したテンプレートです。

中身をコピー&ペースト

Discord.jsの公式ガイドに準拠した内容なため、公式ガイドを見ることで解決できることが多いです。

ただし、制作時期が1～2年前のため最新の状況とは異なっている可能性があります。

公式ガイドは [__こちら__](https://discordjs.guide/legacy)

## 必要なもの
1. **PC** ※1
1. **Node.js** 
1. **テキストエディタ** ※2

※1 Windows11でのみ動作確認しています。Macなどでも動くとは思いますが私は確認していません。

※2 私はVisual Studio Codeを使用しましたが、極論メモ帳でも大丈夫です。

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
