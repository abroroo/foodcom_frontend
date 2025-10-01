import { Head, Html, Main, NextScript } from "next/document"

const MyDocument = () => {
  const kakao_api_key =
    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || "default_value"

  return (
    <Html lang="ko">
      <Head>
        <meta
          name="naver-site-verification"
          content="38c3a4d914672bc96ef1afc4832dbb98687ba697"
        />
        <meta
          name="naver-site-verification"
          content="3579026e60b7019d9c6aa776edcd38baedc6311f"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/manifest/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakao_api_key}&libraries=services,clusterer`}
        ></script>
      </footer>
    </Html>
  )
}

export default MyDocument
