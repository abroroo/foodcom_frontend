import "../styles/global.css"
import "react-day-picker/dist/style.css"

import { useEffect } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { AnimatePresence, motion, useAnimation } from "framer-motion"

import Navbar from "../components/Navbar"

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
          name="description"
          content="A brief description of your page's content."
        />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="Your Name" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta
          property="og:title"
          content="FoodCom, custom catering service platform "
        />
        <meta
          property="og:description"
          content="푸드컴 , 30여년 동안 고객님과 함께 오래 기억에 남는 순간을 만들어 추억해
              왔습니다. 푸드컴은 소중한 순간에 기억에 남을 만한 순간을 소중히
              간직하고 싶습니다. 또한 창립 이후, 푸드산업 및 이벤트산업 내에서
              신뢰할 수 있는 이름이 "
        />
        <meta property="og:image" content="" />

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
        <link rel="icon" type="image/ico" href="/favicon.ico" />

        <link rel="canonical" href="https://푸드컴.co.kr" />
      </Head>

      <motion.div style={{ display: isHomePage ? "none" : "block" }}>
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
