import "./globals.css";
// -memo, Speed Insights使ってみる ( Vercel Speed Insights provides you detailed insights into your website's performance )
// versel mypageのspeed insightsという項目から確認できるようになる.
// https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "study next.js",
  description: "next.jsの学習",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      {/* -memo, JSX特有のclassNameという書き方でクラス属性のプロパティを指定する必要がある */}
      <body className="container">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
