import React from "react"
import Head from "next/head"
import { AboutPage } from "@/components/Sections/About/About"

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          푸드컴_만찬 - 토탈food 외식플렛폼, 가족,기업,단체,기관,축제외.
        </title>
        <meta
          name="description"
          content="푸드컴_만찬 - 출장뷔페,핑거푸드,호텔콘도뷔페,세미뷔페,도시락,급식,통돼지,이벤트등. 특별한 순간과 이벤트를 위한 토탈푸드 플렛폼서비스."
        />
        <meta
          name="keywords"
          content="푸드컴, 만찬, 만찬외식, 전북출장뷔페, 행사이벤트, 행사서비스, 출장, 통돼지, 전주출장부페, 출장케이터링, 단체도시락"
        />
        <meta property="og:title" content="푸드컴_만찬 | 소개" />
        <meta
          property="og:description"
          content="푸드컴_만찬 - 출장뷔페,핑거푸드,호텔콘도뷔페,세미뷔페,도시락,급식,통돼지,이벤트등. 특별한 순간과 이벤트를 위한 토탈푸드 플렛폼서비스."
        />
        <meta property="og:image" content="/images/about_pic.jpeg" />
        <meta property="og:url" content="https://푸드컴.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="푸드컴_만찬 | 소개" />
        <meta
          name="twitter:description"
          content="푸드컴_만찬 - 출장뷔페,핑거푸드,호텔콘도뷔페,세미뷔페,도시락,급식,통돼지,이벤트등. 특별한 순간과 이벤트를 위한 토탈푸드 플렛폼서비스."
        />
        <meta name="twitter:image" content="/images/about_pic.jpeg" />
      </Head>
      <AboutPage />
    </>
  )
}

export default index
