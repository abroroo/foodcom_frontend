import { randomBytes } from "crypto"
import { useEffect } from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"

//import Head from 'next/head';

const MyDocument = () => {
  const kakao_api_key =
    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || "default_value"

  //   const nonce = randomBytes(128).toString("base64")

  //   const csp =
  //     process.env.NODE_ENV === `production`
  //       ? `
  //   object-src 'none';
  //   base-uri 'none';
  //   script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic' https://dapi.kakao.com;
  //   script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' https: http: https://dapi.kakao.com;
  //   img-src 'self' data: https: http:
  // `
  //       : `
  // object-src 'none';
  // base-uri 'none';
  // script-src 'self' 'unsafe-eval' 'unsafe-inline' *;
  // script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' *;
  // img-src 'self' data: *;
  //

  // <Head nonce={nonce} >
  // <meta httpEquiv="Content-Security-Policy" />
  // ` <meta httpEquiv="Content-Security-Policy" content={csp} />
  //   <NextScript nonce={nonce} />
  //  <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>

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

// const cspDevelopment = `
// object-src 'none';
// base-uri 'none';
// script-src 'self' 'unsafe-eval' 'unsafe-inline' *;
// script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' *;
// img-src 'self' data: *;
// `
