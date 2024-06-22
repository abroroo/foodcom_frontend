import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { AboutContent } from "./AboutComponents/AboutContent"
import { SocialMediaLinks } from "./AboutComponents/SocialMediaLinks"

export const AboutPage: React.FC = () => {
  return (
    <motion.div className="flex h-screen w-screen flex-col items-center justify-evenly overflow-scroll bg-[#fff] pt-20 font-outfit text-[#49111c]">
      <main className="h-full w-full md:w-[90%]">
        <div className="grid h-full w-full grid-flow-row auto-rows-max grid-cols-1 content-between gap-8 lg:grid-cols-2">
          <div className="flex h-full w-full justify-center">
            <div className="block xl:fixed">
              <Image
                width={600}
                height={600}
                src="/images/about_pic.jpeg"
                alt="About Us"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <AboutContent />
          <SocialMediaLinks />
        </div>
      </main>
    </motion.div>
  )
}

export default AboutPage
