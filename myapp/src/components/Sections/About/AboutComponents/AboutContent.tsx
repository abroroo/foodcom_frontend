import React from "react"
import { motion } from "framer-motion"

import { ContactInfo } from "./ContactInfo"

export const AboutContent: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-end">
      <div className="flex flex-col overflow-x-hidden px-5 text-[16px]">
        <motion.h1 className="mb-8 font-pt text-2xl font-bold">
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
          푸드서비스 와 이벤트의 황홀한 만남 "푸드컴"에서 완성해 드리겠습니다
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
          핵심입니다. 다양한 메뉴와 깊은 맛으로 맛과멋을 조화롭게 어우러뜨리며,
          특별한 날에 잊지 못할 요리로 감동을 드리겠습니다 오래토록 기억에 남는
          차별화된 서비스로 감동을 전해드리고 행복을 함께 나누겠습니다
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
          고객에게 행복을 드리는 신뢰받는 플렛폼 "푸드컴". 우리는 고객의 생각과
          바램을 현실적으로 디자인하며 그 모든 것을 다루고 서비스 하고 있습니다.
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
          왜 푸드컴을 선택해야 하는가: 당신의 축제 파트너 푸드컴이 함께합니다
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
          행사를 성공하고자 하는 가장 탁월한 선택으로 기억될 것입니다 푸드컴과
          함께 행복한 마법을 만드십시요.
          <br />
          우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 단 한 번의
          선택으로 잊지 못할 성공을 만들어 드립니다. 가장 신뢰할 수 있는
          행사플렛폼 "푸드컴"이 빛나는 고객의 가치를 높여 드립니다
        </motion.p>
      </div>
      <ContactInfo />
    </div>
  )
}

export default AboutContent
