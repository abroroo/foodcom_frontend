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

        <meta name="naver-site-verification" content="" />

        <meta
          name="description"
          content="전주의 푸드컴 - 최고의 케이터링 서비스. 맞춤형 메뉴와 친절한 서비스로 회사 행사부터 결혼식까지 완벽하게 지원합니다"
        />
        <meta
          name="keywords"
          content="케이터링, 출장요리, 배달요리, 케이터링,  맞춤형 메뉴, 무료 견적, 파티, 회의, 결혼식, 고급 식재료, 합리적인 가격, 신속한 배달, 친절한 서비스, 다양한 메뉴, [음식 종류] 케이터링, 홈파티 케이터링, 기업 케이터링"
        />
        <meta name="language" content="ko, en" />

        <meta name="author" content="FoodCom" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta property="og:title" content="푸드컴 - 케이터링 서비스" />

        <meta property="og:image" content="푸드컴 - 케이터링 서비스" />
        <meta
          property="og:description"
          content="전주의 푸드컴 - 최고의 케이터링 서비스. 맞춤형 메뉴와 친절한 서비스로 회사 행사부터 결혼식까지 완벽하게 지원합니다"
        />
        <meta property="og:url" content="https://푸드컴.com"></meta>
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
        <title>푸드컴 - 케이터링 서비스</title>
      </Head>

      <motion.div
        // initial={{opacity: 0, y: -100, }}
        // animate={navLoader}
        // transition={{duration: 1, delay: 2.7 }}
        style={{ display: isHomePage ? "none" : "block" }}
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

// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import Navbar from '../components/Navbar'
// import '../styles/fonts.css';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router';
// import { cubicBezier } from "framer-motion"

// import {BaseProvider, LightTheme} from 'baseui';
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";

// // const engine = new Styletron();

// const App = ({ Component, pageProps, router }: AppProps) => {
//   const isMenuPage = router.route === '/';
//   const isAboutPage = router.route === '/about';
//   const isHomePage = router.route === '/';

//   return (
//     <>

//     {/* <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}> */}
//       <Navbar />
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={router.route}
//           initial="pageInitial"
//           animate="pageAnimate"
//           exit="pageExit"
//           variants={{
//             pageInitial: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '100%',
//             },
//             pageAnimate: {
//               opacity: 1,
//               x: 0,
//               y: 0,
//               transition: {
//                 // type: 'spring',
//                 // stiffness: 230,
//                 // damping: 50,
//                 ease: [0.83, 0, 0.17, 1],
//                 duration: 1.1,

//               },
//             },
//             pageExit: {
//               opacity: 1,
//               x: isMenuPage ? '100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '-50%',
//             },
//           }}
//           transition={{
//             duration: 1.1,
//             ease: [0.83, 0, 0.17, 1],
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//       {/* </BaseProvider>
//   </StyletronProvider> */}
//     </>
//   );
// };

// export default App;

// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import Navbar from '../components/Navbar'
// import '../styles/fonts.css';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router';
// import { cubicBezier } from "framer-motion"

// import {BaseProvider, LightTheme} from 'baseui';
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";

// // const engine = new Styletron();

// const App = ({ Component, pageProps, router }: AppProps) => {
//   const isMenuPage = router.route === '/menu';
//   const isAboutPage = router.route === '/about';
//   const isHomePage = router.route === '/';

//   return (
//     <>

//     {/* <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}> */}
//       <Navbar />
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={router.route}
//           initial="pageInitial"
//           animate="pageAnimate"
//           exit="pageExit"
//           variants={{
//             pageInitial: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '100%',
//             },
//             pageAnimate: {
//               opacity: 1,
//               x: 0,
//               y: 0,
//               transition: {
//                 // type: 'spring',
//                 // stiffness: 230,
//                 // damping: 50,
//                 ease: [0.76, 0, 0.24, 1],
//                 duration: 1.2,

//               },
//             },
//             pageExit: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '-100%',
//             },
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//       {/* </BaseProvider>
//   </StyletronProvider> */}
//     </>
//   );
// };

// export default App;
