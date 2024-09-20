// -memo, ページはabout/page.jsというふうに、フォルダを作ってその中にpage.jsを作ることで作成することができる。
// -memo, このとき、ファイル名はpage.jsである必要がある。

import Link from 'next/link'

// -memo, metaデータをページごとに設定するにはそれぞれのファイルでmetadataをexportすればよい。
export const metadata = {
  title: "study next.js | about",
  description: "next.jsの学習 | about",
};

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <div><Link href="/">Go to home page</Link></div>
    </>
  )
}