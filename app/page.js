// -memo, cssはappディレクトリ配下に作成し、importすることでグローバルに適用することができる。
import './css/style.css'
import './scss/style.scss'
// -memo, このLinkはnext.jsが提供しているもので、aタグのように使えるが、ページ遷移を行う際には、ページ遷移を行うためのリンクを生成してくれる。
// -memo, aタグとの違いは、aタグはページ遷移を行う際にページを再読み込みしてしまうが、Linkは動的にページを読み込むことができるので、再読み込みをせずにページ遷移を行うことができる。つまりめちゃ早い。
import Link from 'next/link'
// -memo, このImageはnext.jsが提供しているもので、画像を表示するためのコンポーネント。
import Image from 'next/image'

export default function Page() {
  return (
    // -memo, returnだと複数の要素を返せないので、<></>で囲む
    <>
      <h1>My Page</h1>
      {/* -memo, Imageコンポーネントはwidthとheightの指定が必須となる */}
      <Image src="/images/next.svg" alt="Next Logo" width={150} height={60} />
      <p>This is my page</p>
      <div><Link href="/about">Go to about page</Link></div>
    </>
  )
}