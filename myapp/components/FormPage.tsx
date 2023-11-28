import { count } from "console"
import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import {
  faBuilding,
  faCalendarDays,
  faChair,
  faFileContract,
  faMapLocationDot,
  faPerson,
  faSackDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { motion, useAnimation } from "framer-motion"
import { Dot, PartyPopper } from "lucide-react"

import EventsModal from "./EventsModal"
import Form from "./Form"

const FormPage = () => {
  const [eventType, setEventType] = useState<string>("")
  const [parentButtonBackground, setParentButtonBackground] =
    useState<string>("")
  const [isCurrentQuestion, setIsCurrentQuestion] = useState<number>(0)
  const [formDataTransfered, setFormDataTransfered] = useState<any>({})

  // Callback function to update the parent's button background
  const handleButtonBackgroundChange = (
    background: string,
    event: string,
    currentQuestion: number,
    formData: any
  ): void => {
    setParentButtonBackground(background)
    setEventType(event)
    setIsCurrentQuestion(currentQuestion)
    setFormDataTransfered(formData)
    console.log("This is formDataTransfered to FromPage: ", formDataTransfered)
  }

  // Circle Following Mouse pointer effect

  const cursorRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const imageFirstParent = useRef<HTMLDivElement>(null)
  const [isMouseWithinHero, setIsMouseWithinHero] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)
  const zoomFactor = 1.1

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const imageElement = imageWrapperRef.current
    const cursorElement = cursorRef.current

    if (imageElement && cursorElement) {
      const imageRect = imageElement.getBoundingClientRect()
      const x = e.clientX - imageRect.left
      const y = e.clientY - imageRect.top

      // Set the cursor's position based on the mouse position within the image with a slight delay
      setCursorX(x)
      setCursorY(y)

      // Apply blur and darkness to the image
      if (imageFirstParent.current) {
        // imageFirstParent.current.style.backgroundSize = `${zoomFactor * 100}%`
        // imageFirstParent.current.style.filter = " brightness(0.95) "
      }
    }
  }

  const handleMouseEnter = (): void => {
    setIsMouseWithinHero(true)
  }

  const handleMouseLeave = (): void => {
    setIsMouseWithinHero(false)
    // Remove blur and darkness when the cursor leaves the image

    if (imageFirstParent.current) {
      // imageFirstParent.current.style.backgroundSize = "100%"
      // imageFirstParent.current.style.filter = "none"
    }
  }

  // MODAL OPEN CLOSE HANDALING

  const [isModalOpen, setIsModalOpen] = useState(false)
  const controls = useAnimation()
  const router = useRouter()

  const handleExploreClick = async (): Promise<void> => {
    // Expand the circle to cover the entire screen
    // controls.start({ scale: [1, 50], opacity: [1, 0] }).then(() => {
    //   setIsModalOpen(true)
    // })

    await controls.start({ scale: [1, 50], opacity: [1, 0] })
    router.push("/work")
  }

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
    // Restore the circle's appearance when closing the modal
    controls.start({ scale: 1, opacity: 1 })
  }

  // IMAGE ANIMATION ENTRANCE AND EXIT IN THE HERO PAGE
  // Define a type for image sources
  type ImageSources = {
    [key: string]: string
  }

  const imageSources: ImageSources = {
    business: "images/real/business.jpg",
    wedding: "images/real/wedding.jpg",
    festival: "images/real/festival.jpg",
    public: "images/real/public.jpg",
    birthday: "images/real/birthday.jpg",
    fingerFood: "images/real/fingerFood.jpg",
    steak: "images/real/steak.jpg",
    other: "",
  }

  // Footer color dynamic function

  const getColor = (index: number): string => {
    // Define color logic based on isCurrentQuestion
    if (isCurrentQuestion >= index) {
      return parentButtonBackground
    }
    return "#EEEEEE" // Default color when not active
  }

  const [eventTypeOther, setEventTypeOther] = useState<string>("")

  const onOtherChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setEventTypeOther(value)
  }

  // Assuming eventTime is in the format "2023-10-19T20:00:00.000Z"
  const eventTime = new Date(formDataTransfered.event_time)
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as Intl.DateTimeFormatOptions

  // as Month Day, hour:minute
  const formattedEventTime = eventTime.toLocaleString("ko-KR", options)

  const [ticket_number, setTicketNumber] = useState<string>("")
  const [countForCustomer, setCountForCustomer] = useState<number>(0)
  const [countForProcess, setCountForProcess] = useState<number>(0)
  const [countForPdf, setCountForPdf] = useState<number>(0)

  const createNewCustomer = async () => {
    if (ticket_number === "") {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/new_customer", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await res.json()
        console.log("Ticket Number: ", data)
        setTicketNumber(data.ticket_number)
        setCountForCustomer(1)
        console.log("Ticket Number in front End: ", ticket_number)
      } catch (error) {
        console.log(error)
      }
    }
  }

  // createNewCustomer();

  const saveFormData = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/process_data/${ticket_number}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataTransfered),
        }
      )
      const data = await res.json()
      console.log("Response from backend: ", data)
      console.log("this is example Data : ", JSON.stringify(formDataTransfered))
      setCountForProcess(1)
    } catch (error) {
      console.log(error)
    }
  }

  const generatePdf = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/generatepdf/${ticket_number}`,
        {
          method: "GET",
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  if (countForCustomer === 0 && isCurrentQuestion === 9) {
    createNewCustomer()
  }
  if (countForCustomer === 1) {
    saveFormData()
  }
  if (countForProcess === 1) {
    generatePdf()
  }

  // post formDataTransferred to the backend and save it to the database

  // useEffect(() => {
  //   const saveFormData = async () => {
  //     try {
  //       const res = await fetch(`http://127.0.0.1:8000/api/customer_update/243242313`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(dataExample),
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (isCurrentQuestion === 8) {
  //     saveFormData();
  //   }
  // })

  const toolNames: {
    [key: number]: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    11: string
    12: string
    13: string
    14: string
  } = {
    1: "사각 테이블",
    2: "원탁테이블",
    3: "스텐딩 테이블",
    4: "의자",
    5: "의자커버",
    6: "자바라 텐트 (3m * 6m)",
    7: "몽골텐트 (5m * 5m)",
    8: "단상",
    9: "기본음향",
    10: "무대",
    11: "진행",
    12: "마스터 밴드",
    13: "플래카드",
    14: "필요없는",
  }

  let toolNamesArr: string[] = []

  if (isCurrentQuestion >= 5) {
    toolNamesArr = formDataTransfered.tool.map((tool: number) => {
      return toolNames[tool]
    })
    toolNamesArr = toolNamesArr.map((tool: string) => {
      return "  " + tool
    })
  }

  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <div className=" flex w-full flex-col md:flex-row  ">
        {/* LEFT HALF */}

        <div
          id="leftDiv"
          className=" z-10  flex h-screen  w-screen items-center justify-center    bg-[#fff] xl:w-[60%]"
        >
          <Form
            onButtonBackgroundChange={handleButtonBackgroundChange}
            eventTypeOther={eventTypeOther}
          />
        </div>

        {/* RIGHT HALF */}

        <div id="rightDiv" className="hidden h-screen w-[40%]   xl:flex   ">
          <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden ">
            {/* <ScrollingTable /> */}

            <div className="flex flex-row items-center justify-center ">
              <motion.div
                ref={imageWrapperRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  backgroundSize: 110,
                  transition: { duration: 0.2 },
                }}
                className="relative flex-col"
              >
                {isMouseWithinHero && (
                  <motion.div
                    onClick={handleExploreClick}
                    id="cursor"
                    ref={cursorRef}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      x: cursorX - 40,
                      y: cursorY - 50,
                    }} // Add a slight delay and position the cursor below
                    animate={
                      isModalOpen
                        ? { scale: 400, opacity: 1 }
                        : {
                            scale: 1,
                            opacity: 1,
                            x: cursorX - 40,
                            y: cursorY - 50,
                          }
                    }
                    exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
                    transition={
                      isModalOpen
                        ? { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                        : { duration: 0.3 }
                    }
                    style={{
                      width: "90px",
                      height: "90px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      position: "absolute",
                      zIndex: 100,
                    }}
                    className="absolute flex cursor-pointer items-center justify-center text-[11px] font-semibold leading-relaxed"
                  >
                    {isModalOpen ? " " : "EXPLORE"}
                  </motion.div>
                )}
                {isCurrentQuestion < 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    ref={imageFirstParent}
                    className={
                      eventType === "wedding" ||
                      eventType === "festival" ||
                      eventType === "business" ||
                      eventType === "public" ||
                      eventType === "birthday" ||
                      eventType === "fingerFood" ||
                      eventType === "steak"
                        ? "flex cursor-pointer"
                        : "hidden"
                    }
                  >
                    <motion.img
                      src={
                        eventType === ""
                          ? "images/real/festival.jpg"
                          : imageSources[eventType]
                      }
                      style={{ width: 450, height: 450 }}
                      className="mb-[5px] mr-[5px] rounded brightness-110"
                    />
                  </motion.div>
                )}
              </motion.div>
              {eventType !== "wedding" &&
                eventType !== "festival" &&
                eventType !== "business" &&
                eventType !== "public" &&
                eventType !== "birthday" &&
                eventType !== "fingerFood" &&
                eventType !== "steak" &&
                isCurrentQuestion < 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    className="flex flex-col"
                  >
                    <span className="text-gray-700">행사 유형</span>
                    <input
                      name="event_type"
                      type="text"
                      className="mt-1 block w-full appearance-none border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:outline-none focus:ring-0 active:border-[#49111c]"
                      placeholder=""
                      value={eventTypeOther}
                      onChange={onOtherChange}
                    />
                  </motion.div>
                )}
            </div>

            {isCurrentQuestion >= 1 && isCurrentQuestion !== 9 && (
              <div className="hidden h-full w-full flex-col items-center justify-center xl:flex">
                <div className="flex items-center justify-between">
                  {isCurrentQuestion >= 1 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        <PartyPopper
                          style={{ color: getColor(0) }}
                          className="h-5 w-5 md:h-9 md:w-9  "
                        />
                        <input
                          onChange={(e) => {
                            setEventType(e.target.value)
                          }}
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={`${
                            formDataTransfered.event_type === "wedding"
                              ? "가쪽 개인행사"
                              : formDataTransfered.event_type === "business"
                              ? "기업 이벤트"
                              : formDataTransfered.event_type === "public"
                              ? "사회 단체행사"
                              : formDataTransfered.event_type === "festival"
                              ? "기관, 축제등"
                              : formDataTransfered.event_type === "birthday"
                              ? "스몰웨딩, 야외결혼"
                              : formDataTransfered.event_type === "fingerFood"
                              ? "핑거푸드"
                              : formDataTransfered.event_type === "steak"
                              ? "스테이크 행사"
                              : eventTypeOther
                          } `}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                  {isCurrentQuestion >= 2 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faPerson}
                          className="h-9 w-9"
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.people_count + " 명"}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {isCurrentQuestion >= 3 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        {" "}
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faSackDollar}
                          className="h-5 w-5 md:h-8 md:w-8 "
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={
                            (
                              formDataTransfered.meal_cost *
                              formDataTransfered.people_count
                            ).toLocaleString("ko-KR") + " 원"
                          }
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                  {isCurrentQuestion >= 4 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faBuilding}
                          className="h-5 w-5 md:h-9 md:w-9 "
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.event_place}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="flex w-[70%] items-center justify-start ">
                  {isCurrentQuestion >= 5 && (
                    <motion.div className=" flex w-full items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex w-full"
                      >
                        {" "}
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faChair}
                          className="h-5 w-5 md:h-9 md:w-9 "
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={[toolNamesArr, formDataTransfered.customTool]}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="flex w-[100%] items-center justify-start">
                  {isCurrentQuestion >= 6 && (
                    <motion.div className=" flex w-[50%] items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex w-full"
                      >
                        {" "}
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faCalendarDays}
                          className="h-5 w-5 md:h-9 md:w-9 "
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-[100%] appearance-none border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formattedEventTime}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                  {isCurrentQuestion >= 7 && (
                    <motion.div className=" flex w-[50%] items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex justify-between"
                      >
                        {" "}
                        <FontAwesomeIcon
                          style={{ color: getColor(1) }}
                          icon={faMapLocationDot}
                          className="h-5 w-5 md:h-9 md:w-9 "
                        />
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.address}
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {isCurrentQuestion >= 8 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        {" "}
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.name}
                          placeholder="이름"
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                  {isCurrentQuestion >= 8 && (
                    <motion.div className=" flex items-center justify-between p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex"
                      >
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.phone_number}
                          placeholder="연락처"
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div className="flex w-full items-center justify-start">
                  {isCurrentQuestion >= 8 && (
                    <motion.div className=" flex w-full items-center justify-center p-2">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className=" flex w-[90%]"
                      >
                        <input
                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                          value={formDataTransfered.message}
                          placeholder="요청 사항"
                        ></input>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {isCurrentQuestion < 9 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              bounce: 0.3,
            }}
            className="absolute bottom-0 left-0 z-[100] h-12 w-screen border border-slate-100 drop-shadow-2xl md:bottom-0 md:h-20 md:w-[100vw] "
          >
            <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-row md:px-32">
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 0 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 0 ? getColor(0) : "transparent",
                    color: isCurrentQuestion === 0 ? "#fff" : getColor(0),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <PartyPopper className="h-5 w-5 md:h-9 md:w-9  " />
                </motion.div>
                <Dot
                  style={{ color: getColor(0) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 0 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(1) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700   md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 1 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 1 ? getColor(1) : "transparent",
                    color: isCurrentQuestion === 1 ? "#fff" : getColor(1),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="h-5 w-5 md:h-8 md:w-8 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(1) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 1 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(2) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 2 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 2 ? getColor(2) : "transparent",
                    color: isCurrentQuestion === 2 ? "#fff" : getColor(2),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="h-5 w-5 md:h-8 md:w-8 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(2) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 2 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(3) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 3 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 3 ? getColor(3) : "transparent",
                    color: isCurrentQuestion === 3 ? "#fff" : getColor(3),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="h-5 w-5 md:h-9 md:w-9 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(3) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 3 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(4) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 4 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 4 ? getColor(4) : "transparent",
                    color: isCurrentQuestion === 4 ? "#fff" : getColor(4),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faChair}
                    className="h-5 w-5 md:h-9 md:w-9 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(4) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 4 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(5) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 5 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 5 ? getColor(5) : "transparent",
                    color: isCurrentQuestion === 5 ? "#fff" : getColor(5),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="h-5 w-5 md:h-9 md:w-9 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(5) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 5 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(6) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 6 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 6 ? getColor(6) : "transparent",
                    color: isCurrentQuestion === 6 ? "#fff" : getColor(6),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="h-5 w-5 md:h-9 md:w-9 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(6) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 6 ? "block" : "hidden"
                  } `}
                />
              </div>
              <hr
                style={{ background: getColor(7) }}
                className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
              ></hr>
              <div className="flex flex-col items-center ">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: isCurrentQuestion === 7 ? -20 : 0,
                    backgroundColor:
                      isCurrentQuestion === 7 ? getColor(7) : "transparent",
                    color: isCurrentQuestion === 7 ? "#fff" : getColor(7),
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.1,
                    stiffness: 220,
                  }}
                  className="rounded-md p-2"
                >
                  <FontAwesomeIcon
                    icon={faFileContract}
                    className="h-5 w-5 md:h-9 md:w-9 "
                  />
                </motion.div>
                <Dot
                  style={{ color: getColor(7) }}
                  size="30px"
                  className={`-translate-y-6 transform ${
                    isCurrentQuestion === 7 ? "block" : "hidden"
                  } `}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {isModalOpen && <EventsModal onClose={handleCloseModal} />}
    </div>
  )
}

export default FormPage
