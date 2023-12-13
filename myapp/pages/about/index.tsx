import React, { use, useEffect, useState } from "react"
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
    <motion.div className="flex h-screen flex-col items-center justify-center overflow-scroll bg-[#fff] font-outfit text-[#49111c]  ">
      <main className="container mx-auto mt-16 h-full px-5  md:mt-56 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2  ">
          <div className="h-full w-full">
            <div className="block xl:fixed ">
              <Image
                width={600}
                height={700}
                src="/images/about_pic.jpeg"
                alt="About Us"
                className="w-full rounded-lg "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center   text-[16px] ">
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
              30여년 동안 고객님과 함께 오래 기억에 남는 순간을 만들어 추억해
              왔습니다. 푸드컴은 소중한 순간에 기억에 남을 만한 순간을 소중히
              간직하고 싶습니다. 또한 창립 이후, 푸드산업 및 이벤트산업 내에서
              신뢰할 수 있는 이름이 되었습니다. 신뢰를 바탕으로 고객님을 최고로
              만들어 드리겠습니다
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
              숙성된 맛과 혁신의 만남 고객에 대한 우리의 헌신은 우리가 하는 일의
              핵심입니다. 다양한 메뉴와 깊은 맛으로 맛과멋을 조화롭게
              어우러뜨리며, 특별한 날에 잊지 못할 요리로 감동을 드리겠습니다
              오래토록 기억에 남는 차별화된 서비스로 감동을 전해드리고 행복을
              함께 나누겠습니다
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
              맛있음 이상의 것 고객의 생각을 디자인 하는 푸드서비스 & 토탈이벤트
              명품플렛폼
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
              상상의 푸드서비스를 디자인하는 이벤트 기획을 현실로 생동감 있게
              고객에게 행복을 드리는 신뢰받는 플렛폼 "푸드컴". 우리는 고객의
              생각과 바램을 현실적으로 디자인하며 그 모든 것을 다루고 서비스
              하고 있습니다.
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
              고객에게 헌신하는 열정적인 파트너"푸드컴"을 선택하는 것은 고객님의
              행사를 성공하고자 하는 가장 탁월한 선택으로 기억될 것입니다
              푸드컴과 함께 행복한 마법을 만드십시요.
              <br />
              우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 단 한 번의
              선택으로 잊지 못할 성공을 만들어 드립니다. 가장 신뢰할 수 있는
              행사플렛폼 "푸드컴"이 빛나는 고객의 가치를 높여 드립니다
            </motion.p>

            <div className="bg-gray-100 p-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-4 text-2xl font-semibold">연락처</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded bg-white p-4 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">
                      카카오톡 계정
                    </h3>
                    <p>
                      모든 문의나 도움이 필요한 경우, 카카오톡을 통해 저희에게
                      연락하실 수 있습니다
                    </p>

                    <div id="kakaotalk-sharing-btn"></div>
                    <a
                      href="https://open.kakao.com/chat/openlink/chat/hw6556"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-500 hover:underline"
                    >
                      카카오톡 계정
                    </a>
                  </div>
                  <div className="rounded bg-white p-4 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">연락 정보</h3>
                    <p>
                      만약 다른 커뮤니케이션 수단을 선호하신다면, 전화나
                      이메일로 저희에게 연락하실 수 있습니다
                    </p>
                    <div className="mt-2">
                      <p className="mb-2">
                        <strong>Phone:</strong> 010 3655 6556
                      </p>
                      <p className="mb-2">
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:contact@example.com"
                          className="text-blue-500 hover:underline"
                        >
                          hw3030@naver.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 flex w-full justify-between  py-2 text-[12px] text-[#49111c] md:text-[13px]">
              <div className="address-info flex ">
                <div className="flex flex-col items-start justify-center">
                  <p className="">
                    © 2023, FoodCom Inc. <br className="block md:hidden " />
                    1577-4405, 063-247-3030
                  </p>
                  <p className="">
                    55014 | 전주시 덕진구 <br className="block md:hidden " />{" "}
                    진버들7길 21(우아동2가)
                  </p>
                </div>
              </div>
              <div className="social-media-icons flex items-center justify-center space-x-4 text-sm">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#49111c] hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#49111c] hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#49111c] hover:text-pink-700"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default index
