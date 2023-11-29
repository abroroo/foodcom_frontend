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
        {/* <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta
          name="description"
          content="A brief description of your page's content."
        /> */}
        {/* <meta name="keywords" content="keyword1, keyword2, keyword3" />
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
        <link rel="icon" type="image/ico" href="/favicon.ico" /> */}

        {/* <link rel="canonical" href="https://푸드컴.co.kr" /> */}
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
