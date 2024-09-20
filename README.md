## 参考サイト等

### 公式ドキュメント
- [Next.js 公式ドキュメント](https://nextjs.org/docs)

### 記事
- [【初心者向け】Next.jsでpagesがなくなって絶望しているあなたへ](https://qiita.com/mu_tomoya/items/7545bea039e82e483f9e)
- [ざっくりApp Router入門【Next.js】](https://zenn.dev/yamadadayo123/articles/6cb4f586de0183)

### YouTube
- [Next.js 13入門 AppRouter対応](https://www.youtube.com/watch?v=lO-Ulx1rclk)
- [Next.jsで学ぶReact講座 #1~17](https://youtu.be/15WLMqnkPsE?si=v_Ubjjz7EX16TEkA)


## App Router (Next.js v13以降) について

### 特別な意味を持つファイルができた
App Routerでは、`app`直下の`page.tsx`ファイルだけがルーティングの対象となる。
(Page Routerでは`pages`直下につくったファイルがすべてルーティングされていた。)

### すべてサーバーコンポーネント (RSC) になった
ファイルの先頭に`"use client"`と書くことで、クライアントコンポーネントにすることも可能。
サーバーコンポーネント = 先にサーバー側でレンダリングしてクライアントに送るコンポーネント。

### プライベートフォルダ
ディレクトリ名の先頭に`_`をつけることで、そのディレクトリはルーティングから除外される。

#### どんなときに使うか
1. 共通コンポーネントやユーティリティをまとめたいとき。
アンダースコア付きディレクトリに配置すれば、ルーティング対象外になり、URLにアクセスされなくなる。

2. スタイルシートや型定義ファイル

**例:**
_components 
_utils 
_styles 
_types


## Server Actions (※これの便利さがまだイメージできていない)

一言でいうと「クライアント側のコードにサーバー側のコードを直接書ける機能」
[詳細はこちら](https://nextjs.org/blog/next-13-4#server-actions-alpha)

> **引用**
> "ヤバイですよねこれ。異次元の便利さです。
> 現時点でまだαなので本番で使うのは厳しいですが、stabledになったら小規模～中規模くらいのプロジェクトは「もう全部Next.jsでいいじゃん」となるかもなので、「こういうのがあるんだな」くらいには知っておいた方が良いと思います。"

[動画解説](https://youtu.be/gircIiBIopA?si=KQdyYI4LXDQ1ZZcI)


## 4種類のキャッシュ
![キャッシュの種類](https://storage.googleapis.com/zenn-user-upload/59c138fd06bf-20230916.webp)


## Sassのインストールについて

Next.js公式ドキュメント: [Sassのインストール](https://nextjs.org/docs/app/building-your-application/styling/sass)
