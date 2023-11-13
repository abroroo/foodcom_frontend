import { ChangeEvent, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  faBellConcierge,
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

import Navbar from "../components/Navbar"
import SmoothScroll from "../components/Scolling/SmoothScroll"

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

  return (
    <motion.main className="loader fixed flex h-[100vh] w-[100vw] items-center justify-center leading-relaxed">
      {/*  Title Text Start */}

      <motion.div
        className=" landing_loader absolute z-[100] flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-y-scroll bg-[#fff]/90 p-10 md:items-center md:px-10"
        initial={{ opacity: 0 }}
        animate={landingLoader}
        transition={{
          duration: 1.6,
          delay: 2.5,
          ease: [0.445, 0.05, 0.058, 0.96],
        }}
      >
        {/* <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center text-gray-50 font-bold text-[250px] -z-[10]'>FOODCOM</h1> */}

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
          <h1 className="mt-[50px] flex flex-col rounded-md px-2  font-kr  text-[25px] font-[900]  leading-relaxed text-[#49111c] md:mt-[100px] md:px-5 md:text-[35px] xl:text-[50px]">
            <span className=" flex items-center justify-center ">
              음식이 필요한 모든행사
            </span>{" "}
            <span className="flex items-center justify-center">
              {/* <FontAwesomeIcon icon={faPlus}  className='text-[25px] mr-16 hidden md:block' /> */}
              * 푸드, 이벤트 견적 플랫폼 *
              {/* <FontAwesomeIcon icon={faPlus}  className='text-[25px] ml-16 hidden md:block' /> */}
            </span>
          </h1>

          <div className="mt-5 flex items-center justify-center text-[#49111c]  ">
            {/* <hr className="w-24 h-[1.5px] my-8 bg-[#49111c] border-0 rounded dark:bg-[#49111c] mr-3" /> */}
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
              className="-rotate-45 text-[23px]"
            />
            <FontAwesomeIcon
              icon={faUtensils}
              flip="horizontal"
              className="text-[30px]"
            />
            {/* <hr className="w-24 h-[1.5px] my-8 bg-[#49111c] border-0 rounded dark:bg-[#49111c] ml-3" /> */}

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
            className=" flex flex-col items-center justify-center p-5 pb-0 font-light md:px-7  xl:px-10 "
          >
            <p className="text-[18px]  leading-relaxed text-[#49111c]/90  md:text-[20px] ">
              {" "}
              <span className="  flex items-center justify-center">
                30년경력 실무 전문가들의
              </span>{" "}
              <span> 고객이 원하는 맞춤형 무료견적 플랫폼</span>{" "}
              <span className="flex flex-col items-center justify-center">
                <span className="flex items-center justify-center md:hidden">
                  가족. 기업. 단체등 식사에서
                </span>{" "}
                <span className="flex items-center justify-center md:hidden">
                  이벤트까지 30년 경력의 전문가들이{" "}
                </span>
              </span>
              <span className="flex items-center justify-center">
                {" "}
                최고의 서비스로 만족을 드립니다.{" "}
              </span>
              <span className="flex items-center justify-center font-kalam font-semibold">
                {" "}
                Food Communication{" "}
              </span>
              <span className="flex items-center justify-center">푸드컴</span>
            </p>
          </motion.div>
        </motion.div>

        {/* <h1  className=' leading-relaxed mt-64 text-[25px] md:text-[35px] xl:text-[45px] font-[900] text-[#49111c]  px-2 md:px-5 rounded-md font-kr '>식사, 음식이 필요한 <br className='block md:hidden' />행사의 기획에서<span className='flex md:hidden'>견적, 실행, 이밴드진행까지 책이지는 도작 푸드전물 플랫폼</span><br className='hidden md:block'/><span className='hidden md:flex items-center justify-center  '> 견적, 실행, 이밴드진행까지 책이지는</span> <span className='hidden md:flex items-center justify-center'>도작 푸드전물 플랫폼</span>
              </h1>

              <div className=' leading-relaxed mt-5 flex items-center justify-center flex-col p-5 md:px-7 xl:px-10 pb-0  font-light  md:mb-10 mb-2'>
                <p className='text-[#49111c]/90  text-[18px] md:text-[25px]    '> 고객 맞춤형 서비스 <br/><span className='flex items-center justify-center'>우한화사 푸드컴</span></p>
                
              </div> */}

        <motion.div
          whileTap={startButtonAnimations}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 4, type: "spring", duration: 0.7, bounce: 0 }}
          viewport={{ once: true }}
          className=" mb-28 mt-5 flex w-full items-center justify-center md:mt-10"
        >
          <Link
            className="flex  items-start justify-center p-0 xl:px-5  "
            href="/form"
          >
            <motion.button
              style={{
                width: 140,
                height: 51,
                borderRadius: 3,
                cursor: "pointer",
              }}
              //transition={{ type: "spring", stiffness: 400, damping: 100 }}
              className={`z-20 flex flex-row items-center justify-center  border bg-[#900C3F] text-[20px] font-semibold leading-relaxed text-[#fff] shadow-sm hover:bg-[#900C3F]/80 md:px-10`}
              //whileTap={{ scale: [1, 1.1, 1] }}
              onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
              onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
            >
              START{" "}
              <motion.div
                // initial={{rotate: 0}}
                // animate={isHovered ? {rotate: [ -15, 15, -15, 0]} : {}}
                // transition={{}}
                className="ml-2 "
              >
                <FontAwesomeIcon bounce icon={faBellConcierge} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/*  Title Text End */}

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
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/bert-hall.jpeg"
                alt="Image 1"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/rene.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/bert-wedd.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/africa.jpeg"
                alt="Image 4"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/brett.jpeg"
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
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/govea.jpeg"
                alt="Image 1"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/trivet.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/naim.jpeg"
                alt="Image 3"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/pietro.jpeg"
                alt="Image 4"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/skyline.jpeg"
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
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/trivet.jpeg"
                alt="Image 1"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/brett.jpeg"
                alt="Image 2"
                onError={(e) => console.error("Image load error", e)}
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <motion.img
                initial={{ scale: 1.5 }}
                animate={isMiddle}
                transition={{
                  duration: 2.4,
                  delay: 2.2,
                  ease: [0.445, 0.05, 0.058, 0.96],
                }}
                className="loader_img is-middle h-full w-full object-cover "
                src="images/optimized/ciling.jpeg"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/africa.jpeg"
                alt="Image 4"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/rene.jpeg"
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
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/bert-hall.jpeg"
                alt="Image 1"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/skyline.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/govea.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/bertelli.jpeg"
                alt="Image 4"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/naim.jpeg"
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
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/govea.jpeg"
                alt="Image 1"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/rene.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/bert-hall.jpeg"
                alt="Image 2"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/skyline.jpeg"
                alt="Image 4"
              />
            </div>

            <div className="loader_image-wrap relative h-[100vh] w-[100vw] overflow-hidden ">
              <img
                className="loader_img h-full w-full object-cover "
                src="images/optimized/brett.jpeg"
                alt="Image 5"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  )
}
