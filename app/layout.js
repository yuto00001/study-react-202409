import "./globals.css";

export const metadata = {
  title: "study next.js",
  description: "next.jsの学習",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      {/* -memo, JSX特有のclassNameという書き方でクラス属性のプロパティを指定する必要がある */}
      <body className="container">{children}</body>
    </html>
  );
}
