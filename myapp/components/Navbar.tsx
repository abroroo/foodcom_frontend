import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  faArrowRight,
  faBars,
  faBellConcierge,
  faFilePen,
  faListCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface Props {}

const Navbar = () => {
  const router = useRouter()

  const currentRoute = router.route
  const isRegisterPage = currentRoute === "/form"

  const [isModalOpen, setIsModalOpen] = useState(false)

  const isCurrentPage = (route: string) => {
    return router.route === route
  }

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  // MODAL CONTENT BASED ON SCREEN SIZE CONFIGURATION

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  // Function to check the screen size
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
        transition={{ delay: 0.5, duration: 1, ease: [0.4, 0.18, 0, 1.03] }}
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
              width={120}
              height={30}
              alt="logo image w-auto h-auto"
            />
          </Link>

          {isModalOpen ? (
            <button onClick={handleMenuClick} className="block xl:hidden">
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                className="text-[20px] text-[#49111c]"
              />
            </button>
          ) : (
            <button onClick={handleMenuClick} className="block xl:hidden">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#49111c] md:text-[#49111c]"
                size="lg"
              />{" "}
            </button>
          )}

          {currentRoute === "/form" ? (
            <Link
              href="/about"
              className="mx-1 hidden h-10 w-10 text-[16px] font-semibold xl:block"
            >
              대해
            </Link>
          ) : (
            <Link
              href="/form"
              className="mx-1 hidden h-10 w-10 text-[16px] font-semibold xl:block"
            >
              용지
            </Link>
          )}
        </div>
      </motion.div>
      {isModalOpen && (
        <motion.div //xl:w-[60vw]
          className="fixed inset-0 z-[99] flex w-full items-center justify-center  bg-white "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center text-[40px] font-bold md:text-[60px] xl:hidden">
            <Link
              href="/form"
              onClick={() => setIsModalOpen(false)}
              className="my-3 rounded-md border  px-2 leading-relaxed md:border-none"
            >
              <p
                className={`my-3 ${
                  isCurrentPage("/form")
                    ? "hidden text-white"
                    : "block text-[#49111c]"
                }`}
              >
                계획 행사
              </p>
            </Link>

            <Link
              href="/work"
              onClick={() => setIsModalOpen(false)}
              className=" my-3 rounded-md border  px-2 leading-relaxed md:border-none"
            >
              <p
                className={`my-3 ${
                  isCurrentPage("/work")
                    ? "hidden text-white"
                    : "block text-[#49111c]"
                }`}
              >
                최근 이벤트
              </p>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsModalOpen(false)}
              className=" my-3 rounded-md border  px-2 leading-relaxed md:border-none"
            >
              <p
                className={`my-3 ${
                  isCurrentPage("/about")
                    ? "hidden text-white"
                    : "block text-[#49111c]"
                }`}
              >
                푸드컴 대해
              </p>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
