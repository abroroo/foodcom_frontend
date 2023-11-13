import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import ConfettiExplosion from "react-confetti-explosion"

interface Props {}

const index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [isExploding, setIsExploding] = React.useState(false)

  useEffect(() => {
    // Your logic for page load completion
    // For demonstration purposes, using a timeout to simulate loading
    const timeoutId = setTimeout(() => {
      setIsPageLoaded(true)
    }, 1300) // Adjust the timeout duration based on your actual loading time

    return () => clearTimeout(timeoutId) // Cleanup the timeout on component unmount
  }, [])

  useEffect(() => {
    if (isPageLoaded) {
      // Trigger exploding effect only when the page is fully loaded
      setIsExploding(true)
    }
  }, [isPageLoaded])

  return (
    <div className="relative flex h-screen w-screen flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          ease: [0.445, 0.05, 0.058, 0.96],
        }}
        className=" right-3/2 top-3/2 absolute flex h-full w-full flex-col items-center justify-center text-center text-[#49111c]"
      >
        {isExploding && (
          <ConfettiExplosion
            force={0.6}
            duration={2000}
            particleCount={70}
            width={800}
          />
        )}

        {/* <div className="">
      <Image
        unoptimized={true}
        layout={"responsive"}
        src="/images/team-work.gif"
        width={400}
        height={300}
        alt="Team working hard illustration"
        className="absolute right-44 top-0"
      />
    </div> */}

        <h1 className="font-NexonGothicBold mb-5 w-full text-5xl font-bold md:mb-10 md:text-8xl">
          감사합니다!!!
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.445, 0.05, 0.058, 0.96],
          }}
          className=" font-NexonGothic flex  w-full  flex-col items-center justify-center px-2 text-lg  font-light md:text-[20px]"
        >
          <p className=" m-0 md:m-1 ">
            귀하의 성공적 행사를 위해 <br className="block md:hidden " /> 30년
            실무경험과 전문성 있는
          </p>

          <p className="m-0 md:m-1 ">
            Catering Food & Event <br className="block md:hidden " /> 고수의
            견적을 보내드리겠습니다!!!
          </p>
          <p className="m-1  "></p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full flex-col   p-4 text-[10px] text-[#49111c] md:text-[13px]">
        <hr className="mb-4 w-full" />
        <div className="flex justify-between">
          <div className="address-info flex ">
            <div className="flex flex-col items-start justify-center font-semibold">
              <p className="">© 2023, FoodCom Inc.</p>
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
  )
}

export default index
