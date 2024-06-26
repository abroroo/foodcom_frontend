import fs from "fs"
import path from "path"
import React, { FC, useEffect, useRef, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"

interface GalleryProps {
  onClose: () => void
  weddingImages: any
  birthdayImages: any
  steakImages: any
  fingerFoodImages: any
  outsideImages: any
  publicImages: any
  businessImages: any
  festivalImages: any
  dosirakImages: any
  ventureImages: any
  defaultImages: any
}

type EventImages = {
  wedding: string[]
  festival: string[]
  business: string[]
  birthday: string[]
  public: string[]
  steak: string[]
  fingerFood: string[]
  dosirak: string[]
  venture: string[]
  real: string[]
  // Add more event types as needed
}

interface image {
  imageSrc: string
  id: number
}

const EventsModal: FC<GalleryProps> = ({
  weddingImages,
  birthdayImages,
  steakImages,
  fingerFoodImages,
  publicImages,
  businessImages,
  festivalImages,
  dosirakImages,
  ventureImages,
  defaultImages,
}) => {
  // following cursor cirlce

  const imageWrapperRef = useRef<HTMLDivElement>(null)

  // Animation for the checkboxes in the first question
  const checkboxAnimations = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  const [selectedEvent, setSelectedEvent] = useState<string>("")

  const eventImages = {
    default: defaultImages,
    wedding: weddingImages,
    festival: festivalImages,
    business: businessImages,
    birthday: birthdayImages,
    public: publicImages,
    steak: steakImages,
    fingerFood: fingerFoodImages,
    dosirak: dosirakImages,
    venture: ventureImages,
    real: defaultImages,
  }

  // Horizontal scroll of inner-carousel while scrolling vertically
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
  // This is work section
  return (
    <>
      <Head>
        {/* SEO Meta Tags for the Work Page */}
        <title>푸드컴의 최근 이벤트 사진 - 케이터링 서비스</title>
        <meta
          name="description"
          content="푸드컴이 제공한 케이터링 서비스의 최근 이벤트 사진을 이곳에서 확인하세요. 다양한 이벤트 유형에 따라 사진을 카테고리별로 구분합니다."
        />
        <meta
          name="keywords"
          content="푸드컴, 이벤트, 케이터링, 사진, 최근 이벤트, 카테고리"
        />
        {/* Add other necessary meta tags as needed */}
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center  overflow-y-scroll bg-[#fff] px-5  pt-[84px] ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0, duartion: 1 }}
          className="  z-[110] h-full w-full"
        >
          {/* Category buttons */}

          <motion.div className="mx-2 mt-2 flex flex-wrap  justify-between  md:mx-10 md:mt-5">
            <motion.div
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper  relative m-1 h-10 w-[6rem] rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50 hover:text-[#F25287]  peer-checked:border-[#F25287] peer-checked:text-[#F25287] md:m-2 md:h-16 
              md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                selectedEvent === "wedding"
                  ? "    border-[1.5px] border-[#F25287] text-[#F25287] shadow-xl"
                  : "  "
              } `}
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
                  className="flex-start "
                  style={{ accentColor: "#F25287" }}
                />
                <label
                  htmlFor="wedding"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
                >
                  <Image
                    width="40"
                    height="40"
                    src="/images/icons/wedding.png"
                    alt="wedding"
                    className="mx-1 h-7 w-7 cursor-pointer md:mx-2 md:h-[40px] md:w-[40px]"
                  />
                  스몰웨딩
                </label>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper relative m-1 h-10 w-[6rem]   select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50 hover:text-[#2563EB] peer-checked:border-[#2563EB]   peer-checked:text-[#2563EB] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "business"
                    ? "    border-[1.5px] border-[#2563EB] text-[#2563EB] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#2563EB" }}
                  id="business"
                  onClick={() => setSelectedEvent("business")}
                  className="flex-start "
                />
                <label
                  htmlFor="business"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
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
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#047857] peer-checked:border-[#047857] peer-checked:text-[#047857] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "public"
                    ? "    border-[1.5px] border-[#047857] text-[#047857] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#047857" }}
                  id="public"
                  onClick={() => setSelectedEvent("public")}
                  className="flex-start"
                />
                <label
                  htmlFor="public"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center "
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
              initial={{ opacity: 1, y: -45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.4, 0.18, 0, 1.03],
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileTap={checkboxAnimations}
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50  hover:text-[#7C3AED] peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "festival"
                    ? "    border-[1.5px] border-[#7C3AED] text-[#7C3AED] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#7C3AED", alignSelf: "flex-start" }}
                  id="festival"
                  onClick={() => setSelectedEvent("festival")}
                />
                <label
                  htmlFor="festival"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
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
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#9D174D] peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "birthday"
                    ? "    border-[1.5px] border-[#9D174D] text-[#9D174D] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#9D174D" }}
                  id="birthday"
                  onClick={() => setSelectedEvent("birthday")}
                  className="flex-start"
                />
                <label
                  htmlFor="birthday"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
                >
                  <Image
                    width="40"
                    height="40"
                    src="/images/icons/birthday.png"
                    alt="birthday"
                    className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                  />
                  <span className="flex">가족 개인</span>
                </label>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[12px] text-[#49111c] hover:bg-gray-50  hover:text-[#FE0000] peer-checked:border-[#FE0000] peer-checked:text-[#FE0000] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "steak"
                    ? "    border-[1.5px] border-[#FE0000] text-[#FE0000] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#FE0000", alignSelf: "flex-start" }}
                  id="steak"
                  onClick={() => setSelectedEvent("steak")}
                />
                <label
                  htmlFor="steak"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
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
              initial={{ opacity: 1, y: -45 }}
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
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg  border text-[12px]   text-[#49111c] hover:bg-gray-50  hover:text-[#F8B400] peer-checked:text-[#F8B400] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "fingerFood"
                    ? "    border-[1.5px] border-[#F8B400] text-[#F8B400] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#F8B400", alignSelf: "flex-start" }}
                  id="fingerFood"
                  onClick={() => setSelectedEvent("fingerFood")}
                />
                <label
                  htmlFor="fingerFood"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
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

            <motion.div
              initial={{ opacity: 1, y: -45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.4, 0.18, 0, 1.03],
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileTap={checkboxAnimations}
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50  hover:text-[#3C0753] peer-checked:border-[#3C0753] peer-checked:text-[#3C0753] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "dosirak"
                    ? "    border-[1.5px] border-[#3C0753] text-[#3C0753] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#3C0753", alignSelf: "flex-start" }}
                  id="dosirak"
                  onClick={() => setSelectedEvent("dosirak")}
                />
                <label
                  htmlFor="dosirak"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
                >
                  <Image
                    width="40"
                    height="40"
                    src="/images/icons/dosirak.png"
                    alt="dosirak"
                    className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                  />
                  도시락
                </label>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: -45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.4, 0.18, 0, 1.03],
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileTap={checkboxAnimations}
                className={`event_range_wrapper relative m-1 h-10 w-[6rem] cursor-pointer select-none rounded-lg border text-[11px] text-[#49111c] hover:bg-gray-50  hover:text-[#11009E] peer-checked:border-[#11009E] peer-checked:text-[#3C0753] md:m-2 md:h-16 md:min-w-[9rem] md:text-[15px] xl:m-2 ${
                  selectedEvent === "venture"
                    ? "    border-[1.5px] border-[#11009E] text-[#11009E] shadow-xl"
                    : "  "
                }`}
              >
                <button
                  style={{ accentColor: "#11009E", alignSelf: "flex-start" }}
                  id="venture"
                  onClick={() => setSelectedEvent("venture")}
                />
                <label
                  htmlFor="venture"
                  className="absolute inset-0 flex cursor-pointer flex-row items-center justify-center"
                >
                  <Image
                    width="40"
                    height="40"
                    src="/images/icons/venture.png"
                    alt="협력업체.행사장소"
                    className="mx-1 h-7 w-7 md:mx-2 md:h-[40px] md:w-[40px]"
                  />
                  협력업체
                  <br />
                  행사장소
                </label>
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: [0.4, 0.18, 0, 1.03] }}
              className=" mx-1 my-4 mt-4  flex w-full flex-col items-center justify-center bg-transparent font-monts text-sm  font-bold leading-relaxed text-[#F99417]  antialiased md:mt-10 md:flex-row md:text-2xl"
            >
              <span className="mr-0 md:mr-1">
                Manchan.Foodcom은 혼이담긴 노력으로{" "}
              </span>
              <span className="">
                고객님 행사의 성공을 위해 최선을 다하겠습니다
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.32, 0, 0.24, 1] }}
            viewport={{ once: true }}
            className=" corousel z-[200]  mx-2  mt-2 overflow-hidden md:mx-10 md:mt-0"
          >
            <motion.div
              ref={imageWrapperRef}
              className="  h-full w-full cursor-grab"
            >
              <div className=" p-2 sm:p-2">
                <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                  {(selectedEvent
                    ? eventImages[selectedEvent as keyof EventImages]
                    : defaultImages
                  ).map((image: image, index: number) => {
                    const reverseIndex =
                      (selectedEvent
                        ? eventImages[selectedEvent as keyof EventImages]
                        : defaultImages
                      ).length -
                      1 -
                      index

                    const reversedImage = (
                      selectedEvent
                        ? eventImages[selectedEvent as keyof EventImages]
                        : defaultImages
                    )[reverseIndex]

                    return (
                      <Image
                        src={reversedImage.imageSrc}
                        alt={selectedEvent || "default"}
                        key={reversedImage.id}
                        width={500}
                        height={550}
                      />
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Outside Events  */}
        </motion.div>
      </div>
    </>
  )
}

export default EventsModal

export async function getServerSideProps() {
  //wedding
  const weddingImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "wedding"
  )
  const weddingImages = fs
    .readdirSync(weddingImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/wedding/${fileName}`,
    }))

  // birthday
  const birthdayImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "birthday"
  )
  const birthdayImages = fs
    .readdirSync(birthdayImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/birthday/${fileName}`,
    }))

  // festival
  const festivalImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "festival"
  )
  const festivalImages = fs
    .readdirSync(festivalImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/festival/${fileName}`,
    }))

  //public

  const publicImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "publicc"
  )
  const publicImages = fs
    .readdirSync(publicImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/publicc/${fileName}`,
    }))

  //bussiness

  const businessImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "bussiness"
  )
  const businessImages = fs
    .readdirSync(businessImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/bussiness/${fileName}`,
    }))

  //outside

  const outsideImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "outside"
  )
  const outsideImages = fs
    .readdirSync(outsideImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/outside/${fileName}`,
    }))

  //fingerFood
  const fingerFoodImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "fingerFood"
  )
  const fingerFoodImages = fs
    .readdirSync(fingerFoodImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/fingerFood/${fileName}`,
    }))

  //steak

  const steakImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "steak"
  )
  const steakImages = fs.readdirSync(steakImagesDirectory).map((fileName) => ({
    id: fileName,
    imageSrc: `/images/real/steak/${fileName}`,
  }))

  //dosirak

  const dosirakImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "dosirak"
  )
  const dosirakImages = fs
    .readdirSync(dosirakImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/dosirak/${fileName}`,
    }))

  //venture
  const ventureImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "venture"
  )
  const ventureImages = fs
    .readdirSync(ventureImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/venture/${fileName}`,
    }))

  // default
  const defaultImagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "real",
    "default"
  )
  const defaultImages = fs
    .readdirSync(defaultImagesDirectory)
    .map((fileName) => ({
      id: fileName,
      imageSrc: `/images/real/default/${fileName}`,
    }))

  return {
    props: {
      weddingImages,
      birthdayImages,
      steakImages,
      fingerFoodImages,
      outsideImages,
      publicImages,
      businessImages,
      festivalImages,
      dosirakImages,
      ventureImages,
      defaultImages,

      // ... other image categories
    },
  }
}
