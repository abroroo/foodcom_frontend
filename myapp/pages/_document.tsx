import Document, { Head, Html, Main, NextScript } from "next/document"

//import Head from 'next/head';

const MyDocument = () => {
  const kakao_api_key =
    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || "default_value"

  return (
    <Html>
      <Head>
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
