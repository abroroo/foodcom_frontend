import React, { FC, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { set } from "date-fns"
import { motion } from "framer-motion"

import SmoothScroll from "../../components/Scrolling/SmoothScrollHorizontal"
import {
  Birthday,
  Bussiness,
  Festival,
  FingerFood,
  Public,
  Real,
  Steak,
  Wedding,
} from "../../utils/images"

interface GalleryProps {
  onClose: () => void // Specify the type of onClose prop
}

type EventImages = {
  wedding: string[] // Replace 'any[]' with the actual type of your images
  festival: string[]
  business: string[]
  birthday: string[]
  public: string[]
  steak: string[]
  fingerFood: string[]
  real: string[]
  // Add more event types as needed
}

interface image {
  imageSrc: string
  id: number
}

const EventsModal: FC<GalleryProps> = ({ onClose }) => {
  // const [widthReal, setWidthReal] = useState(0);
  // const recentSlider = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const slider = recentSlider.current;
  //   if (slider) {
  //     setWidthReal(slider.scrollWidth - slider.offsetWidth);
  //   }
  // }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }

  // following cursor cirlce

  const cursorRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const [isMouseWithinHero, setIsMouseWithinHero] = useState(false)
  const [cursorX, setCursorX] = useState(800)
  const [cursorY, setCursorY] = useState(200)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const imageElement = imageWrapperRef.current
    const cursorElement = cursorRef.current

    if (imageElement && cursorElement) {
      const imageRect = imageElement.getBoundingClientRect()

      const x = e.clientX - imageRect.left
      const y = e.clientY - imageRect.top

      // Set the cursor's position based on the mouse position within the image with a slight delay
      setCursorX(x)
      setCursorY(y)
    }
  }

  const handleMouseEnter = () => {
    setIsMouseWithinHero(true)
  }

  const handleMouseLeave = () => {
    setIsMouseWithinHero(false)
  }

  // Animation for the checkboxes in the first question
  const checkboxAnimations = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  const [selectedEvent, setSelectedEvent] = useState<string>("")

  const eventImages = {
    default: Real,
    wedding: Wedding,
    festival: Festival,
    business: Bussiness,
    birthday: Birthday,
    public: Public,
    steak: Steak,
    fingerFood: FingerFood,
    real: Real,

    // Add other event types and their image arrays here
  }

  // Horizontal scroll of inner-carousel while scrolling vertically

  // Scroll-related state
  const containerRef = useRef<HTMLDivElement>(null)

  const handleVerticalScroll = () => {
    // Handle vertical scroll here
    if (containerRef.current) {
      const scrollY = window.scrollY
      const scrollFactor = 0.5 // Adjust as needed

      // Update the horizontal scroll position of the container
      containerRef.current.scrollLeft = scrollY * scrollFactor
    }
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleVerticalScroll)

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleVerticalScroll)
    }
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center  overflow-y-scroll bg-[#fff] px-5  pt-[84px] md:overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0, duartion: 1 }}
        className="fixed z-[110] w-full "
      >
        <h1 className=" text-md flex w-full items-center justify-center font-monts font-semibold text-[#49111c] md:text-xl">
          이벤트를 클릭하십시오
        </h1>

        {/* Category buttons */}

        <motion.div className="mx-2 mt-2 flex flex-wrap justify-between overflow-y-scroll md:mx-16 md:mt-5">
          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.89,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50 hover:text-[#F25287] peer-checked:border-[#F25287]  peer-checked:text-[#F25287] md:m-2 md:h-16 md:w-[10rem] 
    md:text-[15px] xl:m-2  "
            >
              <button
                id="wedding"
                onClick={() => {
                  setSelectedEvent("wedding")
                  // console.log(
                  //   "selectedEvent inside onClick of wedding",
                  //   selectedEvent
                  //)
                }}
                className="flex-start cursor-pointer"
                style={{ accentColor: "#F25287" }}
              />
              <label
                htmlFor="wedding"
                className="absolute inset-0 flex flex-row items-center justify-center "
              >
                <Image
                  width="40"
                  height="40"
                  src="/images/icons/wedding.png"
                  alt="wedding"
                  className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                />
                가족 개인
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.86,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem]  cursor-pointer select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50 hover:text-[#2563EB] peer-checked:border-[#2563EB]   peer-checked:text-[#2563EB] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2 "
            >
              <button
                style={{ accentColor: "#2563EB" }}
                id="business"
                onClick={() => setSelectedEvent("business")}
                className="flex-start "
              />
              <label
                htmlFor="business"
                className="absolute inset-0 flex flex-row items-center justify-center "
              >
                <Image
                  width="40"
                  height="40"
                  src="/images/icons/bussiness.png"
                  alt="business"
                  className="mx-1 h-8 w-8 md:mx-2 md:h-[40px] md:w-[40px]"
                />
                기업 이벤트
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.83,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#047857] peer-checked:border-[#047857] peer-checked:text-[#047857] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2"
            >
              <button
                style={{ accentColor: "#047857" }}
                id="public"
                onClick={() => setSelectedEvent("public")}
                className="flex-start"
              />
              <label
                htmlFor="public"
                className="absolute inset-0 flex flex-row items-center justify-center "
              >
                <Image
                  width="40"
                  height="40"
                  src="/images/icons/public.png"
                  alt="public"
                  className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                />
                사회 단체
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.4, 0.18, 0, 1.03] }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50  hover:text-[#7C3AED] peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2 "
            >
              <button
                style={{ accentColor: "#7C3AED", alignSelf: "flex-start" }}
                id="festival"
                onClick={() => setSelectedEvent("festival")}
              />
              <label
                htmlFor="festival"
                className="absolute inset-0 flex flex-row items-center justify-center"
              >
                <Image
                  width="40"
                  height="40"
                  src="/images/icons/festival.png"
                  alt="festival"
                  className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                />
                기관, 축제등
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.83,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#9D174D] peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2 "
            >
              <button
                style={{ accentColor: "#9D174D" }}
                id="birthday"
                onClick={() => setSelectedEvent("birthday")}
                className="flex-start"
              />
              <label
                htmlFor="birthday"
                className="absolute inset-0 flex flex-row items-center justify-center "
              >
                <Image
                  width="40"
                  height="40"
                  src="/images/icons/birthday.png"
                  alt="birthday"
                  className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                />
                <span className="flex">스몰웨딩</span>
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.86,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#FE0000] peer-checked:border-[#FE0000] peer-checked:text-[#FE0000] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2 "
            >
              <button
                style={{ accentColor: "#FE0000", alignSelf: "flex-start" }}
                id="steak"
                onClick={() => setSelectedEvent("steak")}
              />
              <label
                htmlFor="steak"
                className="absolute inset-0 flex flex-row items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FE0000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-beef mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                >
                  <circle cx="12.5" cy="8.5" r="2.5" />
                  <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
                  <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
                </svg>
                스테이크
              </label>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.89,
              duration: 1,
              ease: [0.4, 0.18, 0, 1.03],
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileTap={checkboxAnimations}
              className="event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#F8B400] peer-checked:border-[#F8B400] peer-checked:text-[#F8B400] md:m-2 md:h-16 md:w-[10rem] md:text-[15px] xl:m-2 "
            >
              <button
                style={{ accentColor: "#F8B400", alignSelf: "flex-start" }}
                id="fingerFood"
                onClick={() => setSelectedEvent("fingerFood")}
              />
              <label
                htmlFor="fingerFood"
                className="absolute inset-0 flex flex-row items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F8B400"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dessert mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                >
                  <circle cx="12" cy="2" r="1" />
                  <path d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8" />
                  <path d="M3.2 14.8a9 9 0 0 0 17.6 0" />
                </svg>
                핑거푸드
              </label>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.32, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className=" corousel z-[200]  mx-2  mt-2 overflow-hidden md:mx-16 md:mt-0"
        >
          <motion.div
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // whileTap={{ cursor: "grabbing" }}
            className="  h-full w-full cursor-grab"
          >
            <SmoothScroll>
              <motion.div className="inner-corousel relative flex overflow-y-hidden">
                {(selectedEvent
                  ? eventImages[selectedEvent as keyof EventImages]
                  : Real
                )
                  .slice() // Create a shallow copy of the array
                  .reverse() // Reverse the copied array
                  .map((image: image, a: number) => {
                    // const reversedIndex =
                    //   eventImages[selectedEvent as keyof EventImages].length -
                    //   1 -
                    //   a
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1,
                          duration: 1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true }}
                        key={image.id}
                        className="pointer-events-none min-h-[550px] min-w-[500px] p-3"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          viewport={{ once: true }}
                          className="mb-3 pl-[2px] text-[12px] font-semibold"
                        >
                          0{a}
                        </motion.p>
                        <Image
                          src={image.imageSrc}
                          alt={selectedEvent || "default"}
                          width={500}
                          height={550}
                          className="h-full w-full"
                        />
                      </motion.div>
                    )
                  })}
              </motion.div>
            </SmoothScroll>
          </motion.div>
        </motion.div>

        {/* Outside Events  */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5, ease: [0.4, 0.18, 0, 1.03] }}
          viewport={{ once: true }}
          className=" corousel z-[200]  mx-16  overflow-hidden"
        >
          <motion.div
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // whileTap={{ cursor: "grabbing" }}
            className="h-full w-full cursor-grab "
          >
            <motion.div className="inner-corousel flex overflow-y-hidden ">
              {isMouseWithinHero && (
                <motion.div
                  id="cursor"
                  ref={cursorRef}
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    position: "absolute",
                    zIndex: 100,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: cursorX - 40,
                    y: cursorY - 95,
                  }} // Add a slight delay and position the cursor below
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: cursorX - 40,
                    y: cursorY - 95,
                  }}
                  exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  className=" flex flex-col items-center justify-center rounded-full pt-3 text-[15px] font-semibold text-[#49111c]"
                >
                  스크롤
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 0,
                      repeatDelay: 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    animate={{ x: 10, opacity: [0, 1, 0] }}
                  >
                    <FontAwesomeIcon
                      className=" h-[14px] w-6"
                      icon={faArrowRight}
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* End of Circle */}
      </motion.div>
    </div>
  )
}

export default EventsModal
