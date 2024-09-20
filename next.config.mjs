/** @type {import('next').NextConfig} */

// -memo, nextのdocからsassを使用するための設定を追加
// -memo, 'scss'というフォルダの中に入っているsassファイルはコンパイルする
// https://nextjs.org/docs/app/building-your-application/styling/sass
// -memo, docのコードをそのまま使おうとするとReferenceErrorとなるため、下記の形に修正

import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'scss')],
  },
};


/* ----- docのコード ------ */
// const path = require('path')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
/* ----- ---------- ------ */



export default nextConfig;