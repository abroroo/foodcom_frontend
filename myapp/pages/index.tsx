import { ChangeEvent, useEffect, useRef, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  faBellConcierge,
  faImage,
  faPenToSquare,
  faPhone,
  faPhoneVolume,
  faPlus,
  faSpoon,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion"
import { ChefHat, Image as LucideImage, MountainSnow } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const columnInnerControls1 = useAnimation()
  const columnInnerControls2 = useAnimation()
  const columnInnerControls3 = useAnimation()
  const columnInnerControls4 = useAnimation()
  const columnInnerControls5 = useAnimation()

  const isMiddle = useAnimation()
  const loaderFlex = useAnimation()

  const landingLoader = useAnimation()

  useEffect(() => {
    if (router.asPath === router.route) {
      columnInnerControls1.start({ height: "100%", y: 0 })
      columnInnerControls2.start({ height: "100%", y: "10%" })
      columnInnerControls3.start({ height: "100%", y: 0 })
      columnInnerControls4.start({ height: "100%", y: "10%" })
      columnInnerControls5.start({ height: "100%", y: 0 })
      isMiddle.start({ scale: 1 })
      loaderFlex.start({ scale: 1 })
      landingLoader.start({ opacity: 1 })
    }
  }, [
    router,
    columnInnerControls1,
    columnInnerControls2,
    columnInnerControls3,
    columnInnerControls4,
    columnInnerControls5,
    isMiddle,
    loaderFlex,
    landingLoader,
  ])

  const [isHovered, setIsHovered] = useState(false)

  // Animation for the checkboxes in the first question
  const startButtonAnimations = {
    opacity: [1, 0],
    transition: {
      duration: 0.1,
    },
  }

  // Animation for lines

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 3.6, type: "spring", duration: 0.7, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }

  // Opacity Animation for the landing page up section

  const { scrollY } = useScroll()

  const imageOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const scaleHero = useTransform(scrollY, [0, 650], [1, 0.9])
  const yPostionDiv = useTransform(scrollY, [0, 500], [0, 200])
  const yPostionDivText = useTransform(scrollY, [0, 400], [0, -200])

  // Animation for the checkboxes in the first question
  const checkboxAnimations = {
    scale: [1.1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  return (
    <>
      <Head>
        <title>
          만찬_푸드컴 - FOOD명품플렛폼, 출장푸드전문회사, 도시락, 행사대행.
        </title>
        <meta
          name="description"
          content="만찬_푸드컴 - 30년노하우. 신선한재료와 정성가득 food서비스 특별한순간 고객을위한 최고의서비스제공."
        />
        <meta
          name="keywords"
          content="푸드컴, 만찬, 만찬외식, 전북출장뷔페, 행사이벤트, 행사서비스, 출장, 통돼지, 전주출장부페, 출장케이터링, 단체도시락"
        />
        <meta property="og:title" content="만찬 | 푸드컴" />
        <meta
          property="og:description"
          content="만찬_푸드컴 - 30년노하우. 신선한재료와 정성가득 food서비스 특별한순간 고객을위한 최고의서비스제공."
        />
        <meta property="og:image" content="/images/heroImage.jpg" />
        <meta property="og:url" content="https://푸드컴.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="만찬 | 푸드컴" />
        <meta
          name="twitter:description"
          content="만찬_푸드컴 - 30년노하우. 신선한재료와 정성가득 food서비스 특별한순간 고객을위한 최고의서비스제공."
        />
        <meta name="twitter:image" content="/images/heroImage.jpg" />
      </Head>

      <motion.main className="loader fixed flex h-[100vh] w-[100vw] items-center justify-center leading-relaxed">
        {/*  Title Text Start */}

        <motion.div
          className=" landing_loader absolute z-[100] flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-y-scroll bg-[#fff]/90 p-5 leading-7 md:items-center  md:px-10"
          initial={{ opacity: 0 }}
          animate={landingLoader}
          transition={{
            duration: 1.6,
            delay: 2.5,
            ease: [0.445, 0.05, 0.058, 0.96],
          }}
        >
          <motion.div
            style={{
              opacity: imageOpacity,
              y: yPostionDivText,
              zIndex: yPostionDiv,
            }}
            initial={{ opacity: 0 }}
            animate={landingLoader}
            transition={{
              duration: 1,
              delay: 3,
              ease: [0.445, 0.05, 0.058, 0.96],
            }}
          >
            <h1 className=" font-zermatt mt-[50px] flex flex-col rounded-md    px-2 text-[20px] font-bold leading-relaxed text-[#49111c] md:mt-[100px] md:px-5 md:text-[35px] xl:text-[45px]">
              <motion.div className="flex items-center justify-center">
                <Link href="/work">
                  <Image
                    src="/images/heroImage.jpg"
                    width={300}
                    height={60}
                    alt="푸드컴 케이터링 서비스 사진"
                    priority={true}
                    className="h-[130px] w-[220px] scale-x-125 object-fill md:h-[180px] md:w-[300px]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </motion.div>
              <span className="   mb-2 flex flex-col items-center justify-center py-0 text-[20px] font-[900] md:text-[30px]">
                <span className=" py-0">MAN CHAN * FOODCOM</span>{" "}
                <span className="py-0 font-kaushan">Catering Service</span>
              </span>
            </h1>
            <div className="flex w-full items-center justify-center ">
              <Link
                className="mx-2  flex items-start justify-center p-0 md:mx-1 xl:px-5"
                href="/about"
              >
                <motion.button
                  whileTap={checkboxAnimations}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  style={{
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                  className={`z-20 flex h-[60px] w-[110px] flex-row items-center  justify-center  bg-gradient-to-r from-[#D71313] to-[#900C3F] text-[16px] font-semibold leading-relaxed text-[#fff] shadow-sm hover:from-pink-500 hover:to-yellow-500   md:h-[65px] md:w-[130px] md:px-1`}
                  onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
                  onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
                >
                  <motion.div
                    initial={{ y: 0, scale: 1 }}
                    whileInView={{
                      scale: [1, 1.05, 1, 1.05, 1],
                      y: [0, -5, 0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      delay: 0.5,

                      repeatDelay: 1,
                    }}
                    className="  mr-1"
                  >
                    <ChefHat />
                  </motion.div>
                  회사소개{" "}
                </motion.button>
              </Link>

              <Link
                className="mx-2 flex  items-start justify-center p-0 md:mx-1 xl:px-5 "
                href="/work"
              >
                <motion.button
                  style={{
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 100 }}
                  className={`z-20 flex h-[60px] w-[110px] flex-row  items-center justify-center  bg-gradient-to-r    from-[#900C3F] to-[#D71313] text-[16px] font-semibold  leading-relaxed text-[#fff] shadow-sm hover:from-yellow-500 hover:to-pink-500   md:h-[65px] md:w-[130px] md:px-1`}
                  whileTap={checkboxAnimations}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
                  onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
                >
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }}
                    whileInView={{
                      scale: [1, 1.2, 1, 1.2, 1],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,

                      repeatDelay: 1,
                    }}
                    className="  "
                  >
                    <LucideImage className="h-6 w-6" />
                  </motion.div>

                  <span className="ml-2 flex flex-col ">
                    <span>행사사진</span> <span>자료실</span>
                  </span>
                </motion.button>
              </Link>
              <Link
                className="mx-2 flex  items-start justify-center p-0 md:mx-1 xl:px-5 "
                href="/form"
              >
                <motion.button
                  style={{
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 100 }}
                  className={`z-20 flex h-[60px] w-[110px] flex-row  items-center justify-center  bg-gradient-to-r    from-[#900C3F] to-[#D71313] text-[14px] font-semibold leading-relaxed  text-[#fff] shadow-sm hover:from-yellow-500 hover:to-pink-500 md:h-[65px]   md:w-[130px] md:px-1 md:text-[16px]`}
                  whileTap={checkboxAnimations}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
                  onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
                >
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }}
                    whileInView={{
                      scale: [1, 1.2, 1, 1.2, 1],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,

                      repeatDelay: 1,
                    }}
                    className="  "
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className=" h-3 w-3  md:h-4 md:w-4"
                    />
                  </motion.div>

                  <span className="ml-2 flex flex-col ">견적요청하기</span>
                </motion.button>
              </Link>
            </div>
            <div className="font-zermatt mt-2 text-[18px] font-normal leading-relaxed  text-[#49111c]/90 md:text-[22px] ">
              <span className="flex items-center justify-center">
                행사 성공을 원하십니까!
              </span>
            </div>
            <div className=" flex items-center justify-center text-[#49111c]  ">
              <motion.svg
                width="170"
                height="40"
                viewBox="0 0 200 40"
                initial="hidden"
                animate="visible"
                className=""
              >
                <motion.line
                  x1="170"
                  y1="20"
                  x2="15"
                  y2="20"
                  stroke="#49111c"
                  strokeWidth={2.5}
                  variants={draw}
                  custom={2}
                />
              </motion.svg>
              <FontAwesomeIcon
                icon={faSpoon}
                className=" h-16 w-6 -rotate-45 "
              />
              <FontAwesomeIcon
                icon={faUtensils}
                flip="horizontal"
                className="h-16 w-7 "
              />

              <motion.svg
                width="170"
                height="40"
                viewBox="0 0 200 40"
                initial="hidden"
                animate="visible"
                className=""
              >
                <motion.line
                  x1="30"
                  y1="20"
                  x2="185"
                  y2="20"
                  stroke="#49111c"
                  strokeWidth={2.5}
                  variants={draw}
                  custom={2}
                />
              </motion.svg>
            </div>

            <motion.div
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 3.9,
                type: "spring",
                duration: 0.7,
                bounce: 0,
              }}
              viewport={{ once: true }}
              className=" flex flex-col items-center justify-center p-0 font-light  md:px-7  xl:px-10 "
            >
              <div className="font-zermatt text-[18px] font-normal leading-relaxed text-[#49111c]/90  md:text-[22px] ">
                {" "}
                <span className="  flex items-center justify-center">
                  30년경력 실무전문가와 파트너가 되어
                </span>{" "}
                <span className="flex items-center justify-center">
                  {" "}
                  귀하의 행사를 완성하세요
                </span>{" "}
                <div className="sheet center middle">
                  <div className="tile" style={{ transform: "none" }}>
                    <div
                      className="copy center black"
                      style={{ width: "100% !important" }}
                    >
                      <div className="marquee mb-2 font-bold">
                        <div>
                          <span>출장푸드 | 행사대행 | 랜탈 </span>
                          <span>출장푸드 | 행사대행 | 랜탈 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <span className=" leading-8">
                  <span className="flex items-center justify-center font-kr text-[20px] font-bold">
                    푸드컴
                  </span>
                </span> */}
                <span className="mt-3 flex items-center justify-center font-dm text-[18px] font-bold">
                  <span className="mr-2 flex items-center justify-center font-kr text-[20px] font-bold">
                    만찬_푸드컴
                  </span>
                  <FontAwesomeIcon
                    className="mr-2 h-[18px] w-[18px] font-pt"
                    icon={faPhoneVolume}
                  />{" "}
                  <a href="tel:1577-4405">1577-4405</a>
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            whileTap={startButtonAnimations}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 4,
              type: "spring",
              duration: 0.7,
              bounce: 0,
            }}
            viewport={{ once: true }}
            className=" mb-28 mt-3 flex w-full items-center justify-center md:mt-5"
          ></motion.div>
        </motion.div>

        {/* Title Text End */}

        <motion.div
          initial={{ scale: 0.24 }}
          animate={isMiddle}
          transition={{
            duration: 2.1,
            delay: 2.1,
            ease: [0.445, 0.05, 0.058, 0.96],
          }}
          className="loader_flex flex h-[561vh] flex-row items-stretch   "
        >
          <div className="loader_column flex flex-col items-stretch justify-start px-[7vh]">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnInnerControls1}
              transition={{ duration: 2.4, ease: [0.8, 0.24, 0.104, 0.773] }}
              className="loader_column_inner is-edge flex h-full flex-none flex-col items-stretch justify-between "
            >
              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/ptimized2/photo0.jpeg"
                  alt="Image 1"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo1.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo2.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo3.jpeg"
                  alt="Image 4"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo4.jpeg"
                  alt="Image 5"
                />
              </div>
            </motion.div>
          </div>

          <div className="loader_column is-alt flex flex-col items-stretch justify-end px-[7vh]">
            <motion.div
              initial={{ height: "340%", y: "-40%" }}
              animate={columnInnerControls2}
              transition={{ duration: 2.4, ease: [0.8, 0.24, 0.104, 0.773] }}
              className="loader_column_inner is-reversed flex h-full flex-none flex-col items-stretch justify-between"
            >
              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo5.jpeg"
                  alt="Image 1"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo6.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo7.jpeg"
                  alt="Image 3"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo8.jpeg"
                  alt="Image 4"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo9.jpeg"
                  alt="Image 5"
                />
              </div>
            </motion.div>
          </div>

          <div className="loader_column px-[7vh]">
            <motion.div
              initial={{ height: "370%", y: "40%" }}
              animate={columnInnerControls3}
              transition={{ duration: 2.4, ease: [0.8, 0.24, 0.104, 0.773] }}
              className="loader_column_inner is-centered flex h-full flex-none flex-col items-stretch justify-between"
            >
              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo10.jpeg"
                  alt="Image 1"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo11.jpeg"
                  alt="Image 2"
                  onError={(e) => console.error("Image load error", e)}
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <motion.img
                  alt="background-image"
                  initial={{ scale: 1.5 }}
                  animate={isMiddle}
                  transition={{
                    duration: 2.4,
                    delay: 2.2,
                    ease: [0.445, 0.05, 0.058, 0.96],
                  }}
                  src="/images/optimized/ciling.jpeg"
                  className="loader_Image is-middle h-full w-full object-cover "
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo12.jpeg"
                  alt="Image 4"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo13.jpeg"
                  alt="Image 5"
                />
              </div>
            </motion.div>
          </div>

          <div className="loader_column is-alt flex flex-col items-stretch justify-end px-[7vh]">
            <motion.div
              initial={{ height: "340%", y: "-40%" }}
              animate={columnInnerControls4}
              transition={{ duration: 2.4, ease: [0.8, 0.24, 0.104, 0.773] }}
              className="loader_column_inner is-reversed flex h-full flex-none flex-col items-stretch justify-between"
            >
              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/ptimized2/photo0.jpeg"
                  alt="Image 1"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo14.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo15.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo16.jpeg"
                  alt="Image 4"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo17.jpeg"
                  alt="Image 5"
                />
              </div>
            </motion.div>
          </div>

          <div className="loader_column px-[7vh]">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnInnerControls5}
              transition={{ duration: 2.4, ease: [0.8, 0.24, 0.104, 0.773] }}
              className="loader_column_inner is-edge flex h-full flex-none flex-col items-stretch justify-between"
            >
              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo18.jpeg"
                  alt="Image 1"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo19.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/ptimized2/photo0.jpeg"
                  alt="Image 2"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo5.jpeg"
                  alt="Image 4"
                />
              </div>

              <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
                <Image
                  width={400}
                  height={300}
                  priority={true}
                  className="loader_Image h-full w-full object-cover "
                  src="/images/optimized2/photo3.jpeg"
                  alt="Image 5"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 -z-50">
          <a
            href="https://open.kakao.com/chat/openlink/chat/hw6556"
            className=" text-[#49111c] hover:text-yellow-300"
          />
          <a
            href="https://www.facebook.com/pudeukeomeuchuljangsigsa.ibenteu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49111c] hover:text-blue-700"
          />
          <a
            target="_blank"
            href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%91%B8%EB%93%9C%EC%BB%B4&oquery=%ED%91%B8%EB%93%9C%EC%BB%B4&tqi=ikmv1lqVOZossajMI4wssssss%2Fs-258546"
            className="mr-9 text-[#49111c] hover:text-green-700"
          />
          <a
            href="https://www.instagram.com/foodcom_event/?igsh=MWpuZGxzZm1kbjVpbw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49111c] hover:text-pink-700"
          />
        </div>
      </motion.main>
    </>
  )
}
