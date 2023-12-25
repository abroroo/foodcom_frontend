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
    <motion.div className="flex h-screen w-screen flex-col items-center justify-center overflow-scroll bg-[#fff] font-outfit text-[#49111c]  ">
      <main className="container mx-auto mt-32 h-full md:mt-56   ">
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
          <div className="flex flex-col">
            <div className="flex flex-col   justify-center overflow-x-hidden px-5 text-[16px]">
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
                신뢰할 수 있는 이름이 되었습니다. 신뢰를 바탕으로 고객님을
                최고로 만들어 드리겠습니다
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
                고객에게 헌신하는 열정적인 파트너"푸드컴"을 선택하는 것은
                고객님의 행사를 성공하고자 하는 가장 탁월한 선택으로 기억될
                것입니다 푸드컴과 함께 행복한 마법을 만드십시요.
                <br />
                우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 단 한
                번의 선택으로 잊지 못할 성공을 만들어 드립니다. 가장 신뢰할 수
                있는 행사플렛폼 "푸드컴"이 빛나는 고객의 가치를 높여 드립니다
              </motion.p>
            </div>

            <div className=" bg-gray-100  ">
              <div className="mx-auto  max-w-4xl p-8">
                <h2 className="mb-4 text-2xl font-semibold">연락처</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded bg-white p-4 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">
                      <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Kakao</title>
                        <path d="M3.0743 10.4403l.655.4728-1.6101 2.0192 1.8647 2.2373-.646.5004-2.201-2.6924zm-2.2376 5.102H0V8.5121l.8367-.182zm20.944-4.3837c-.4364 0-.7715.1637-1.0049.4912-.2338.3274-.3505.8064-.3505 1.437 0 .6247.1167 1.096.3505 1.4143.2334.3183.5685.4775 1.0049.4775.4423 0 .7804-.1593 1.0143-.4775.2332-.3182.35-.7896.35-1.4142 0-.6307-.1168-1.1097-.35-1.4371-.234-.3275-.572-.4912-1.0143-.4912m0-.673c.691 0 1.234.2245 1.6277.673.3944.4488.5916 1.0915.5916 1.9283 0 .8244-.1955 1.4583-.5868 1.901-.3909.4422-.9356.6637-1.6325.6637-.691 0-1.234-.2215-1.6277-.6638-.3944-.4426-.5916-1.0765-.5916-1.901 0-.8367.1984-1.4794.5957-1.9282.3973-.4485.9385-.673 1.6236-.673m-5.534 4.4658a1.496 1.496 0 0 0 .3576-.0456 2.8804 2.8804 0 0 0 .3713-.1181 2.0066 2.0066 0 0 0 .3488-.1774 2.0778 2.0778 0 0 0 .2895-.2229v-1.1641h-.8693c-.441 0-.7626.0758-.9645.2274-.2025.1516-.3031.391-.3031.7185 0 .5214.2563.7822.7697.7822m-1.5704-.7458c0-.5032.1682-.887.5045-1.1504.337-.2638.826-.396 1.4691-.396h.964v-.3182c0-.77-.3393-1.155-1.0185-1.155-.2184 0-.447.0304-.6869.091-.2398.0608-.4594.1365-.659.2274l-.2457-.5913c.2487-.1394.517-.2469.8047-.323.2878-.0754.5685-.1136.8414-.1136 1.176 0 1.7646.6276 1.7646 1.8826v3.1833h-.6188l-.1-.5457c-.2488.2001-.5134.3547-.796.464-.2817.1092-.55.1637-.8046.1637-.4429 0-.7899-.1258-1.0416-.3775-.2515-.2517-.3772-.5987-.3772-1.0413m-1.6508-3.7653l.655.4728-1.6095 2.0192 1.864 2.2373-.6454.5004-2.201-2.6924zm-2.237 5.102h-.8367V8.5121l.8368-.182zm-4.4936-.5909c.1148 0 .2339-.0151.3576-.0456a2.8794 2.8794 0 0 0 .3713-.1181 1.9842 1.9842 0 0 0 .3488-.1774 2.0477 2.0477 0 0 0 .29-.2229v-1.1641h-.8698c-.4404 0-.762.0758-.9645.2274-.202.1516-.3031.391-.3031.7185 0 .5214.2563.7822.7697.7822m-1.5704-.7458c0-.5032.1682-.887.5052-1.1504.3363-.2638.826-.396 1.4684-.396h.9646v-.3182c0-.77-.3399-1.155-1.019-1.155-.218 0-.4471.0304-.6863.091-.2398.0608-.4595.1365-.6597.2274l-.2457-.5913c.2487-.1394.517-.2469.8053-.323.2878-.0754.5684-.1136.8408-.1136 1.1766 0 1.7646.6276 1.7646 1.8826v3.1833h-.6182l-.1001-.5457c-.2487.2001-.514.3547-.7958.464-.282.1092-.5501.1637-.8053.1637-.4423 0-.7893-.1258-1.041-.3775-.2516-.2517-.3778-.5987-.3778-1.0413Z" />
                      </svg>{" "}
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
                    {/* <p>
                      만약 다른 커뮤니케이션 수단을 선호하신다면, 전화나
                      이메일로 저희에게 연락하실 수 있습니다
                    </p> */}
                    <div className="mt-2">
                      <p className="mb-2">
                        <strong>전화번호:</strong> 1577-4405 <br /> (+82)
                        63-247-3030 <br className="block  " /> (+82)10-3655-6556
                      </p>
                      <p className="mb-2">
                        <strong>이메일:</strong>{" "}
                        <a
                          href="mailto:hw3030@naver.com"
                          className="text-blue-500 hover:underline"
                        >
                          contact@푸드컴.com
                        </a>
                      </p>
                      <p className="">
                        <strong>주소:</strong> 전주시 덕진구 진버들7길
                        <br className="block md:hidden " />
                        21(우아동2가) 55014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="flex flex-col items-center bg-[#49111c]/80 text-center text-white ">
              <div className="container pt-9">
                <div className="mb-9 flex justify-center">
                  <a href="https://facebook.com" className="mr-9 text-[#fff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://naver.com" className="mr-9 text-white">
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
                    href="https://open.kakao.com/chat/openlink/chat/hw6556"
                    className="mr-9 text-white "
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>KakaoTalk</title>
                      <path d="M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z" />
                    </svg>
                  </a>
                  <a href="#!" className="mr-9 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-full bg-[#49111c]/90 p-4 text-center text-[15px] text-[#fff] ">
                © 2024
                <a className="p-1 text-[#fff]/90" href="http://manchan.co.kr/">
                  FoodCom <br className="block md:hidden " />
                  All Rights Reserved
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default index

{
  /* <div className="my-5 flex w-full justify-between  py-2 text-[12px] text-[#49111c] md:text-[13px]">
              <div className="address-info flex ">
                <div className="flex flex-col items-start justify-center">
                  <p className="">
                    © 2024, FoodCom Inc. <br className="block md:hidden " />
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
            </div> */
}
