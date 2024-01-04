import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"

import FormPage from "../../components/FormPage"
import SmoothScroll from "../../components/Scrolling/SmoothScroll"

interface Props {}

const index = () => {
  return (
    <>
      {" "}
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <title>이벤트 케이터링 서비스 요청 페이지</title>
        <meta
          name="description"
          content="이 페이지는 고객이 이벤트용 케이터링 서비스를 요청하고 원하는 메뉴, 예산, 장소, 참석자 수 등을 지정할 수 있는 폼 페이지입니다."
        />
        <meta
          name="keywords"
          content="이벤트 케이터링, 서비스 요청, 메뉴 선택, 예산, 장소, 참석자 수, 사용자 지정 요청"
        />
        <meta name="author" content="당신의 회사 이름" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="이벤트 케이터링 서비스 요청 페이지"
        />
        <meta
          property="og:description"
          content="이 페이지는 고객이 이벤트용 케이터링 서비스를 요청하고 원하는 메뉴, 예산, 장소, 참석자 수 등을 지정할 수 있는 폼 페이지입니다."
        />
        <meta
          property="og:image"
          content="이미지 URL (당신의 회사나 서비스를 대표하는 이미지 URL)"
        />
        <meta property="og:url" content="https://푸드컴.com/form" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="이벤트 케이터링 서비스 요청 페이지"
        />
        <meta
          name="twitter:description"
          content="이 페이지는 고객이 이벤트용 케이터링 서비스를 요청하고 원하는 메뉴, 예산, 장소, 참석자 수 등을 지정할 수 있는 폼 페이지입니다."
        />
        <meta
          name="twitter:image"
          content="이미지 URL (당신의 회사나 서비스를 대표하는 이미지 URL)"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://푸드컴.com/form" />
      </Head>
      <motion.div className="">
        <FormPage />
      </motion.div>
    </>
  )
}

export default index
