import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  faBars,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface Props {}

const Navbar = () => {
  const router = useRouter()

  const currentRoute = router.route

  const [isModalOpen, setIsModalOpen] = useState(false)

  const isCurrentPage = (route: string) => {
    return router.route === route
  }

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Animation for the checkboxes in the first question
  const checkboxAnimations = {
    scale: [1.1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  // MODAL CONTENT BASED ON SCREEN SIZE CONFIGURATION

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1280) // You can adjust the breakpoint as needed
  }

  // Add a listener for window resize events
  useEffect(() => {
    checkScreenSize() // Check initially
    window.addEventListener("resize", checkScreenSize)

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.4, 0.18, 0, 1.03] }}
        className="fixed z-[100]  w-screen bg-[#fff] p-2  font-outfit  shadow-inner xl:p-0"
      >
        <div
          className={`flex flex-row items-center justify-between p-2 tracking-wide  ${
            isCurrentPage("/about") ? "text-[#49111c]" : "text-[#1d040b]"
          } `}
        >
          <Link href="/" className={`mx-1 text-xl font-bold   `}>
            <Image
              src="/images/logo.png"
              width={100}
              height={30}
              alt="logo image "
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {currentRoute === "/form" ? (
            <div className="">
              {" "}
              {isModalOpen ? (
                <button onClick={handleMenuClick} className="block xl:hidden">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-8 w-4 text-[#49111c]"
                  />
                </button>
              ) : (
                <button onClick={handleMenuClick} className="block xl:hidden">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="h-8 w-4 text-[#49111c] "
                    //size="lg"
                  />{" "}
                </button>
              )}{" "}
            </div>
          ) : (
            <div className="hidden">
              {" "}
              {isModalOpen ? (
                <button onClick={handleMenuClick} className="block xl:hidden">
                  <FontAwesomeIcon
                    icon={faXmark}
                    //size="lg"
                    className="h-8 w-4 text-[#49111c]"
                  />
                </button>
              ) : (
                <button onClick={handleMenuClick} className="block xl:hidden">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="h-8 w-4 text-[#49111c] "
                    //size="lg"
                  />{" "}
                </button>
              )}{" "}
            </div>
          )}

          {currentRoute === "/form" ? (
            <Link
              href="/about"
              className="mx-1 hidden h-10 w-10 items-center justify-center text-[16px] font-semibold xl:flex"
            >
              소개
            </Link>
          ) : (
            <div className="flex flex-row ">
              <Link
                className="mx-2  flex items-center justify-center p-0 md:mx-0 xl:p-1"
                href="/form"
              >
                <motion.button
                  whileTap={checkboxAnimations}
                  style={{
                    cursor: "pointer",
                  }}
                  className={`z-20 flex h-[40px] w-[105px] flex-row items-center justify-center rounded-lg bg-gradient-to-r    from-[#900C3F] to-[#D71313] px-2 text-[12px]  font-semibold leading-relaxed text-[#fff]  hover:from-pink-500    hover:to-yellow-500 md:h-[50px] md:w-[135px] md:text-[16px]`}
                >
                  <div className=" flex items-center justify-center ">
                    <motion.div
                      initial={{ rotate: 0, scale: 1, y: 0 }}
                      whileInView={{
                        scale: [1, 1.05, 1, 1.05, 1],
                        y: [0, -5, 0, -5, 0],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.5,
                        repeatDelay: 1.5,
                      }}
                      className="  mr-2"
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className=" h-3 w-3  md:h-4 md:w-4"
                      />
                    </motion.div>
                    <span className="flex items-center justify-center pt-1 font-bold">
                      견적요청하기
                    </span>
                  </div>
                </motion.button>
              </Link>
              <Link
                className="mx-2  flex items-center justify-center p-0 md:mx-0 xl:p-1"
                href="http://manchan.fordining.kr/"
              >
                <motion.button
                  whileTap={checkboxAnimations}
                  style={{
                    cursor: "pointer",
                  }}
                  className={`z-20 flex h-[40px] w-[105px] flex-row items-center justify-center rounded-lg bg-gradient-to-r    from-[#F99417] to-[rgb(245,146,47)] text-[14px] font-semibold  leading-relaxed text-[#fff] hover:from-pink-500  hover:to-yellow-500    md:h-[50px] md:w-[135px] md:text-[16px]`}
                >
                  <div className=" flex items-center justify-center ">
                    <motion.div
                      initial={{ rotate: 0, scale: 1, y: 0 }}
                      whileInView={{
                        scale: [1, 1.05, 1, 1.05, 1],
                        y: [0, -5, 0, -5, 0],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.5,
                        repeatDelay: 1.5,
                      }}
                      className="  "
                    ></motion.div>
                    <span className="flex items-center justify-center pt-1 font-bold">
                      더 알아보기
                    </span>
                  </div>
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[99] flex w-full items-center justify-center  bg-white "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center text-[40px] font-bold md:text-[60px] xl:hidden">
            <Link
              href="/work"
              onClick={() => setIsModalOpen(false)}
              className={` my-4 border-0 border-b-[1px]  px-2 leading-relaxed md:border-none ${
                isCurrentPage("/work")
                  ? "hidden text-white"
                  : "block text-[#49111c]"
              }`}
            >
              <p className={`my-0`}>행사사진</p>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsModalOpen(false)}
              className={` my-4 border-0 border-b-[1px]  px-2 leading-relaxed md:border-none ${
                isCurrentPage("/about")
                  ? "hidden text-white"
                  : "block text-[#49111c]"
              }`}
            >
              <p className={`my-0 `}>푸드컴 소개</p>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
