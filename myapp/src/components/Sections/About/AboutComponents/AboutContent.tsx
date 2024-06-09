import React from "react"
import { aboutPageContent } from "@/data/About/AboutPageContent"
import { motion } from "framer-motion"

import { ContactInfo } from "./ContactInfo"

export const AboutContent: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-end">
      <div className="flex flex-col overflow-x-hidden px-5 text-[16px]">
        <motion.h1 className="mb-8 font-pt text-2xl font-bold">
          {aboutPageContent.title}
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
          {aboutPageContent.firstParagraphTitle}
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
          {aboutPageContent.firstParagraph}
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
          {aboutPageContent.secondParagraphTitle}
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
          {aboutPageContent.secondParagraph}
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
          {aboutPageContent.thirdParagraphTitle}
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
          {aboutPageContent.thirdParagraph}
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
          {aboutPageContent.fourthParagraphTitle}
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
          {aboutPageContent.fourthParagraph1}
          <br />
          {aboutPageContent.fourthParagraph2}
        </motion.p>
      </div>
      <ContactInfo />
    </div>
  )
}

export default AboutContent
