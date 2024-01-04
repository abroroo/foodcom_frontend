import React, { use, useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title> 푸드컴 - 30년 전통의 푸드 서비스</title>
        <meta
          name="description"
          content="푸드컴 - 1994년 창립 이후, 30년간 고객과 함께하는 전통의 푸드 서비스를 제공합니다. 특별한 순간과 이벤트를 위한 푸드 컨설팅 및 서비스."
        />
        <meta
          name="keywords"
          content="푸드컴, Food Communication Inc, 푸드 서비스, 이벤트 서비스, 푸드컴 연중무휴, 푸드컴 연락처, 푸드컴 이메일, 푸드컴 주소"
        />
        <meta property="og:title" content="Food Communication Inc | 푸드컴" />
        <meta
          property="og:description"
          content="푸드컴 - 1994년 창립 이후, 30년간 고객과 함께하는 전통의 푸드 서비스를 제공합니다. 특별한 순간과 이벤트를 위한 푸드 컨설팅 및 서비스."
        />
        <meta property="og:image" content="/images/about_pic.jpeg" />
        <meta property="og:url" content="https://푸드컴.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Communication Inc | 푸드컴" />
        <meta
          name="twitter:description"
          content="푸드컴 - 1994년 창립 이후, 30년간 고객과 함께하는 전통의 푸드 서비스를 제공합니다. 특별한 순간과 이벤트를 위한 푸드 컨설팅 및 서비스."
        />
        <meta name="twitter:image" content="/images/about_pic.jpeg" />
      </Head>
      <motion.div className="  flex  h-screen  w-screen flex-col items-center justify-evenly  overflow-scroll bg-[#fff]  pb-10 pt-20 font-outfit  text-[#49111c]">
        {/* flex flex-col items-center justify-center  overflow-scroll*/}
        <main className="   h-full w-full     md:w-[90%]">
          {/* md:mt-[13rem] mt-32  */}
          <div className="grid h-full w-full  grid-flow-row  auto-rows-max grid-cols-1 content-between gap-8 lg:grid-cols-2">
            <div className="flex h-full w-full justify-center">
              <div className="block  xl:fixed ">
                <Image
                  width={600}
                  height={600}
                  src="/images/about_pic.jpeg"
                  alt="About Us"
                  className="w-full rounded-lg "
                />
              </div>
            </div>
            <div className="flex h-full flex-col justify-end   ">
              <div className="flex  flex-col  overflow-x-hidden px-5 text-[16px]">
                <motion.h1 className="mb-8 font-cormorant text-2xl font-bold">
                  Food Communication Inc
                </motion.h1>

                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="font-semibold leading-relaxed"
                >
                  푸드컴에 오신 것을 환영합니다 - 1994년창립이후
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="mb-6 leading-relaxed text-[#49111c]"
                >
                  30여년 동안 고객님과 함께 오래 기억에 남는 순간을 만들어
                  추억해 왔습니다. 푸드컴은 소중한 순간에 기억에 남을 만한
                  순간을 소중히 간직하고 싶습니다. 또한 창립 이후, 푸드산업 및
                  이벤트산업 내에서 신뢰할 수 있는 이름이 되었습니다. 신뢰를
                  바탕으로 고객님을 최고로 만들어 드리겠습니다
                </motion.p>

                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="font-semibold leading-relaxed"
                >
                  푸드서비스 와 이벤트의 황홀한 만남 "푸드컴"에서 완성해
                  드리겠습니다
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="mb-6 leading-relaxed text-[#49111c]"
                >
                  숙성된 맛과 혁신의 만남 고객에 대한 우리의 헌신은 우리가 하는
                  일의 핵심입니다. 다양한 메뉴와 깊은 맛으로 맛과멋을 조화롭게
                  어우러뜨리며, 특별한 날에 잊지 못할 요리로 감동을 드리겠습니다
                  오래토록 기억에 남는 차별화된 서비스로 감동을 전해드리고
                  행복을 함께 나누겠습니다
                </motion.p>

                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.45,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="font-semibold leading-relaxed"
                >
                  맛있음 이상의 것 고객의 생각을 디자인 하는 푸드서비스 &
                  토탈이벤트 명품플렛폼
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="mb-6 leading-relaxed text-[#49111c]"
                >
                  상상의 푸드서비스를 디자인하는 이벤트 기획을 현실로 생동감
                  있게 고객에게 행복을 드리는 신뢰받는 플렛폼 "푸드컴". 우리는
                  고객의 생각과 바램을 현실적으로 디자인하며 그 모든 것을 다루고
                  서비스 하고 있습니다.
                </motion.p>

                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.55,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="font-semibold leading-relaxed"
                >
                  왜 푸드컴을 선택해야 하는가: 당신의 축제 파트너 푸드컴이
                  함께합니다
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="mb-6 leading-relaxed text-[#49111c]"
                >
                  단순히 행사가 아닌 소중한 추억과 미래의 행복을 만들어 드립니다
                  고객에게 헌신하는 열정적인 파트너"푸드컴"을 선택하는 것은
                  고객님의 행사를 성공하고자 하는 가장 탁월한 선택으로 기억될
                  것입니다 푸드컴과 함께 행복한 마법을 만드십시요.
                  <br />
                  우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 단 한
                  번의 선택으로 잊지 못할 성공을 만들어 드립니다. 가장 신뢰할 수
                  있는 행사플렛폼 "푸드컴"이 빛나는 고객의 가치를 높여 드립니다
                </motion.p>
              </div>

              <div className="   bg-gray-100">
                <div className="mx-auto  max-w-4xl p-8">
                  <div className="grid grid-cols-1 gap-4 ">
                    <div className="rounded bg-white p-4 shadow-md">
                      <h3 className=" text-xl font-semibold">연중무휴</h3>
                      <p className="">24시간 상담 가능</p>

                      <div className="mt-2">
                        <p className="mb-1 flex">
                          <span className="w-6 font-bold">문</span>
                          <span className="flex w-7 justify-end font-bold">
                            {" "}
                            의:
                          </span>{" "}
                          <span className="ml-1 flex flex-col items-start">
                            1577-4405 | (063)247-3030
                          </span>
                        </p>
                        <p className="mb-1">
                          <span className="w-12 font-semibold">e-mail:</span>{" "}
                          <a
                            href="mailto:hw3030@naver.com"
                            className=" hover:underline"
                          >
                            hw3030@naver.com
                          </a>
                        </p>
                        <p className="">전주시 덕진구 진버들7길 21 (55014)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="   w-full flex-col text-[11px]  text-[#49111c] md:w-[90vw]  md:text-[13px] ">
              <hr className="mb-3 w-full xl:mb-0" />
              <div className="flex justify-between px-2 pb-2 md:p-4">
                <div className="address-info flex ">
                  <a
                    href="https://푸드컴.com"
                    className="flex flex-col items-start justify-center "
                  >
                    <p className="">
                      © 2024 FoodCom. <br className="block md:hidden" />
                      All Rights Reserved
                    </p>
                  </a>
                </div>
                <div className="social-media-icons flex items-center justify-center space-x-4 text-sm">
                  <a
                    href="https://open.kakao.com/chat/openlink/chat/hw6556"
                    className=" text-[#49111c] hover:text-yellow-300"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#49111c] hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                  </a>
                  <a
                    href="https://naver.com"
                    className="mr-9 text-[#49111c] hover:text-green-700"
                  >
                    <svg
                      fill="currentColor"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Naver</title>
                      <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#49111c] hover:text-pink-700"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  )
}

export default index
