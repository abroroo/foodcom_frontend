import "../styles/global.css"
import "react-day-picker/dist/style.css"

import { useEffect } from "react"
import type { AppProps } from "next/app"
import Document, { Html, Main, NextScript } from "next/document"
import Head from "next/head"
import { useRouter } from "next/router"
import Script from "next/script"
import { AnimatePresence, motion, useAnimation } from "framer-motion"

import Navbar from "../components/Navbar"
import SmoothScroll from "../components/Scrolling/SmoothScroll"
import SmoothScrollSimple from "../components/Scrolling/SmoothScrollSimple"

const App = ({ Component, pageProps, router }: AppProps) => {
  const currentRoute = router.route
  const isHomePage = currentRoute === "/"
  const isForm = currentRoute === "/form"
  const isThankYouPage = currentRoute === "/thank-you"

  const navLoader = useAnimation()

  useEffect(() => {
    navLoader.start({ opacity: 1, y: 0 })
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          name="naver-site-verification"
          content="38c3a4d914672bc96ef1afc4832dbb98687ba697"
        />
        <meta
          name="naver-site-verification"
          content="3579026e60b7019d9c6aa776edcd38baedc6311f"
        />
        <title>푸드컴 - 출장푸드.이벤트.행사대행.랜탈</title>
        <meta
          name="sitename"
          content="푸드컴 - 출장푸드.이벤트.행사대행.랜탈"
        ></meta>
        <meta
          name="description"
          content="푸드컴 - 전북특별자치도 최고의 출장food/이벤트 전문 플렛폼 입니다. 30년실무경력을 바탕으로 가족.기업.단체행사부터 축제.기념.커뮤니티행사까지 최고의 서비스로 지원해 드리는 출장행사전문 food-com입니다"
        />
        <meta
          name="keywords"
          content="케이터링 서비스, 푸드컴, 맞춤형 메뉴, 출장푸드, 이벤트, 행사대행, 결혼식 케이터링, 회사 행사 케이터링, 친절한 서비스, 랜탈"
        />
        <meta name="author" content="푸드컴.com"></meta>
        <meta property="og:url" content="https://푸드컴.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="푸드컴 - 출장푸드.이벤트.행사대행.랜탈
"
        />
        <meta
          name="og:description"
          content="푸드컴 - 전북특별자치도 최고의 출장food/이벤트 전문 플렛폼 입니다. 30년실무경력을 바탕으로 가족.기업.단체행사부터 축제.기념.커뮤니티행사까지 최고의 서비스로 지원해 드리는 출장행사전문 food-com입니다"
        />
        <meta property="og:image" content="https://food-c.co.kr/seoImage.jpg" />{" "}
        <meta property="og:type" content="website" />
        <meta name="author" content="푸드컴" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="푸드컴" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="푸드컴.com" />
        <meta property="twitter:url" content="https://푸드컴.com" />
        <meta
          name="twitter:title"
          content="푸드컴 - 출장푸드/이벤트/행사대행"
        />
        <meta
          name="twitter:description"
          content="푸드컴 - 전북특별자치도 최고의 출장food/이벤트 전문 플렛폼 입니다. 30년실무경력을 바탕으로 가족.기업.단체행사부터 축제.기념.커뮤니티행사까지 최고의 서비스로 지원해 드리는 출장행사전문 food-com입니다"
        />
        <meta name="twitter:image" content="" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" href="/manifest/icon-192x192.png" />
        <link rel="canonical" href="https://푸드컴.com" />
      </Head>

      <motion.div
        // initial={{opacity: 0, y: -100, }}
        // animate={navLoader}
        // transition={{duration: 1, delay: 2.7 }}
        style={{ display: isHomePage ? "none" : "flex" }}
      >
        <Navbar />
      </motion.div>

      <AnimatePresence mode="sync">
        <motion.div
          key={currentRoute}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              y: isForm ? "100%" : isThankYouPage ? "100%" : 0,
              x: isHomePage ? 0 : isForm ? 0 : isThankYouPage ? 0 : "-100%",
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                // type: 'spring',
                // stiffness: 230,
                // damping: 50,
                ease: [0.83, 0, 0.17, 1],
                duration: 0.6,
              },
            },
            pageExit: {
              x: isHomePage ? 0 : isForm ? "-100%" : 0,
              y: isHomePage ? "-100%" : isThankYouPage ? "100%" : 0,
              opacity: isHomePage ? 0 : 1,
            },
          }}
          transition={{
            duration: 0.6,
            ease: [0.83, 0, 0.17, 1],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
