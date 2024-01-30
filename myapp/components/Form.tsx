import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { DayPicker } from "react-day-picker"

import AddressFinder from "./AddressFinder"

import "react-datepicker/dist/react-datepicker.css"

import Image from "next/image"
import {
  faBuilding,
  faCalendarDays,
  faCaretLeft,
  faCaretRight,
  faChair,
  faChevronLeft,
  faChevronRight,
  faEnvelopeCircleCheck,
  faFileContract,
  faPerson,
  faSackDollar,
  faUserGroup,
  faUsers,
  faWallet,
  faWonSign,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { setHours, setMinutes } from "date-fns" // Import the functions

import { tr } from "date-fns/locale"
import ko from "date-fns/locale/ko"
import { Link, PartyPopper, Users, Wallet } from "lucide-react"
import ConfettiExplosion from "react-confetti-explosion"

interface ChildComponentProps {
  eventTypeOther: string
  desktopOtherType: string
  onButtonBackgroundChange: (
    background: string,
    eventType: string,
    currentQuestion: number,
    formData: any
  ) => void
}

const Form = ({
  onButtonBackgroundChange,
  eventTypeOther,
  desktopOtherType,
}: ChildComponentProps) => {
  // vars to store form data, not sure if needed

  const [eventDate, setEventDate] = useState<Date>()
  const [eventAddress, setEventAddress] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [customerMessage, setCustomerMessage] = useState("")
  const [eventVenue, setEventVenue] = useState("")
  const router = useRouter()
  const [eventOtherType, setEventOtherType] = useState("")
  // ...

  // const currentDate = new Date(); // Get the current date and time
  // const updatedDate = setHours(setMinutes(currentDate, 30), 17);

  const [currentDate, setCurrentDate] = useState<Date | null>(new Date())

  const [selectedAccesories, setSelectedAccesories] = useState<string[]>([])
  const [customTool, setCustomTool] = useState<string>("")

  const handleCheckboxAccesories = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target
    setSelectedAccesories((prevFormData: any) => [...prevFormData, value])
  }

  const handleCheckboxAccesoriesOther = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setCustomTool(value)
  }

  // 키다 option handling var
  const [showInputOtherPlace, setShowInputOtherPlace] =
    useState<string>("false")
  const [showOtherEventInput, setShowOtherEventInput] =
    useState<string>("false")
  const [showOtherToolInput, setShowOtherToolInput] = useState<string>("false")

  // other option handling
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    // Update the showInput state based on the radio option checked or unchecked
    if (value === "otherEventType") {
      setShowOtherEventInput("true")
    } else if (value === "otherPlace") {
      setShowInputOtherPlace("true")
    } else if (value === "otherTool") {
      setShowOtherToolInput("true")
    } else {
      setShowOtherEventInput("false")
      setShowInputOtherPlace("false")
      setShowOtherToolInput("false")
    }
  }

  // used for show/hide on next button click var
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // next/previous  button handling
  const totalQuestions = 9

  const handleNext = (): void => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handlePrevious = (): void => {
    setCurrentQuestion(currentQuestion - 1)
  }

  // Number People Range Input Handling

  const [sliderPeopleNum, setSliderPeopleNum] = useState(0)
  const [sliderBudgetVal, setSliderBudgetNum] = useState(0)
  // Calculate the position of the icon based on sliderValue
  const iconPositionForPeopleNum = {
    left: `${(sliderPeopleNum / 1000) * 94}%`, // Adjust this based on your layout
  }

  const iconPositionForBudget = {
    left: `${(sliderBudgetVal / 150000) * 100}%`, // Adjust this based on your layout
  }

  // Handle changes in radio inputs and update the formData state
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
    if (name === "people_count") {
      setSliderPeopleNum(parseInt(value))
    } else if (name === "meal_cost") {
      setSliderBudgetNum(parseInt(value))
    } else if (name === "event_place") {
      setEventVenue(value)
    } else if (name === "event_type") {
      setEventOtherType(value)
    } else if (name === "name") {
      setCustomerName(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Perform your API request or any other necessary actions
      // console.log("Form Data!")
      // console.log(JSON.stringify(formData))
      // console.log(formData)
    } catch (error) {
      console.error(error)
    }
  }

  const [phoneNumberError, setPhoneNumberError] = useState("")

  const validatePhoneNumber = (value: string) => {
    const phoneNumberRegex = /\d{11}$/

    if (phoneNumberRegex.test(value)) {
      setPhoneNumberError("완벽해요!")
      return value
    } else if (value === "") {
      setPhoneNumberError("")
    } else {
      setPhoneNumberError("11개의 숫자만 입력하십시오")
      return formData.phone_number // Return the previous value if the new value doesn't pass the checks
    }
  }

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target

    // Call the validation function and set the phoneNumber value
    const validatedPhoneNumber = validatePhoneNumber(value)
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: validatedPhoneNumber,
    }))
    setPhoneNumber(validatedPhoneNumber)
  }

  // Confetti Animation
  const [isExploding, setIsExploding] = useState(false)

  const [sliderBudgetValStart, setSliderBudgetValStart] = useState(0)
  // const [sliderBudgetValEnd, setSliderBudgetValEnd] = useState(100000); // Initial end value

  // Calculate the position of the icons based on slider values
  const iconPositionStart = {
    left: `${(sliderBudgetValStart / 100000) * 105}%`, // Adjust this based on your layout
  }

  // const iconPositionEnd = {
  //   left: `${(sliderBudgetValEnd / 80000) * 78}%`, // Adjust this based on your layout
  // };

  // Handle changes in range inputs
  const handleStartInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target
    setSliderBudgetValStart(parseInt(value))
    setSliderBudgetNum(parseInt(value))

    // // Ensure that the start value is less than or equal to the end value
    // if (parseInt(value) >= sliderBudgetValEnd) {
    //   setSliderBudgetValEnd(parseInt(value) + 5000); // Adjust the step value as needed
    // }
  }

  // background chnage Event

  const [selectedEvent, setSelectedEvent] = useState("")
  const [buttonBackground, setButtonBackground] = useState("#F1F5F9")

  useEffect(() => {
    // Initialize the buttonBackground state on the client-side
    let initialButtonBackground = "#F1F5F9"
    if (selectedEvent === "wedding") initialButtonBackground = "#F25287"
    else if (selectedEvent === "festival") initialButtonBackground = "#7C3AED"
    else if (selectedEvent === "business") initialButtonBackground = "#2563EB"
    else if (selectedEvent === "public") initialButtonBackground = "#047857"
    else if (selectedEvent === "birthday") initialButtonBackground = "#9D174D"
    else if (selectedEvent === "fingerFood") initialButtonBackground = "#F8B400"
    else if (selectedEvent === "steak") initialButtonBackground = "#FE0000"
    else if (selectedEvent !== `${eventTypeOther}`)
      initialButtonBackground = "#C05621"
    setButtonBackground(initialButtonBackground)
    onButtonBackgroundChange(
      initialButtonBackground,
      selectedEvent,
      currentQuestion,
      formData
    )
    if (currentQuestion === 9) {
      setIsExploding(true)
    } else {
      setIsExploding(false)
    }
  }, [selectedEvent, currentQuestion])

  const handleCheckboxChange = (value: string) => {
    setSelectedEvent(value)

    // Set the selected event and pass the buttonBackground value to the parent
    let updatedButtonBackground = "#F1F5F9"
    if (value === "wedding") updatedButtonBackground = "#F25287"
    else if (value === "festival") updatedButtonBackground = "#7C3AED"
    else if (value === "business") updatedButtonBackground = "#2563EB"
    else if (value === "public") updatedButtonBackground = "#047857"
    else if (value === "birthday") updatedButtonBackground = "#9D174D"
    else if (value === "fingerFood") updatedButtonBackground = "#F8B400"
    else if (value === "steak") updatedButtonBackground = "#FE0000"
    else if (value !== `${eventTypeOther}`) updatedButtonBackground = "#C05621"

    setButtonBackground(updatedButtonBackground)

    // Call the callback function from the parent with the updated buttonBackground value
    //onButtonBackgroundChange(updatedButtonBackground, selectedEvent);
  }

  // FOR DAY PICKER

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: ${buttonBackground};
    color: ${buttonBackground};
  }
  .my-today { 
    font-weight: bold;
    font-size: 100%; 
    color: red;
  }
`

  const [selected, setSelected] = React.useState<Date>()
  const [timeValue, setTimeValue] = React.useState<string>("00:00")

  const disabledDays = [{ from: new Date(2022, 4, 18), to: new Date() }]

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const time = e.target.value
    if (eventDate) {
      setTimeValue(time)
      return
    }
  }

  const handleDaySelect = (date: Date | undefined): void => {
    if (date) {
      setSelected(date)
      // console.log("THis is date: ", date)
      setEventDate(date)
      return
    }
  }

  // END FOR DAY PICKER

  // Update formData whenever eventAddress changes
  useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      address: eventAddress,
      tool: selectedAccesories,
      customTool: customTool,
      event_type: eventOtherType || desktopOtherType || selectedEvent,
      //date_rigistered: currentDate,
      event_date: eventDate,
      event_time: timeValue,
      meal_cost: sliderBudgetVal,
      event_place: eventVenue,
      name: customerName,
      phone_number: parseInt(phoneNumber),
      message: customerMessage,
    }))
  }, [
    eventAddress,
    selectedAccesories,
    selectedEvent,
    currentDate,
    eventDate,
    timeValue,
    sliderBudgetVal,
    eventVenue,
    customerName,
    phoneNumber,
    customerMessage,
  ])

  // Initialize state to store the selected options for each question
  const [formData, setFormData] = useState<any>({
    // initial date value
    address: eventAddress,
    tool: selectedAccesories,
  })

  // Animation for the checkboxes in the all questions exept the first one
  const checkboxAnimationsGeneral = {
    scale: [1.15, 1.25, 1],
    transition: {
      duration: 0.2,
    },
  }

  const checkboxAnimationsSecondary = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  // Animation for the checkboxes in the first question
  const checkboxAnimations = {
    scale: [1.1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  // For chnaging backgroundcolor of checked option
  const [checkedOption, setCheckedOption] = useState("")

  // FOR SHOWING DATA IN CONFIRMATION PAGE MOBILE VIEW
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(eventDate)

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

  if (currentQuestion >= 5) {
    toolNamesArr = formData.tool.map((tool: number) => {
      return toolNames[tool]
    })
    toolNamesArr = toolNamesArr.map((tool: string) => {
      return "  " + tool
    })
  }

  return (
    <>
      <form
        className="text-non-selectable flex  h-full w-full flex-col items-center justify-center overflow-y-scroll bg-opacity-[0.98] p-10 md:overflow-y-hidden md:p-28 md:px-20"
        onSubmit={handleSubmit}
      >
        {/* Intro to Form */}

        {currentQuestion === 0 && (
          <div className=" mt-16 flex flex-col items-center justify-center  md:mt-0  ">
            <h1 className=" flex items-center  justify-center text-[1rem] font-semibold lg:text-[1.2rem]">
              <PartyPopper
                style={{ color: buttonBackground }}
                className="mr-2 h-9 w-9"
              />{" "}
              어떤 행사를 계획하고 계십니까?
            </h1>

            <div className=" mt-5  flex flex-wrap justify-between md:mt-4">
              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px] text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#F25287] peer-checked:border-[#F25287] 
    peer-checked:text-[#F25287] md:m-2 md:h-32 md:w-32 md:text-[14px] xl:m-2"
              >
                <input
                  type="checkbox"
                  value="wedding"
                  id="wedding"
                  checked={selectedEvent === "wedding"}
                  onChange={() => handleCheckboxChange("wedding")}
                  className=""
                  style={{ accentColor: buttonBackground }}
                />
                <label
                  htmlFor="wedding"
                  className="absolute inset-0 flex flex-col items-center justify-center "
                >
                  <Image
                    width="54"
                    height="54"
                    src="/images/icons/wedding.png"
                    alt="wedding"
                    className="mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
                  />
                  <span className="flex">
                    스몰웨딩<span className="hidden md:block">, 야외결혼</span>
                  </span>
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px] text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#2563EB] peer-checked:border-[#2563EB] peer-checked:text-[#2563EB] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  value="business"
                  id="business"
                  checked={selectedEvent === "business"}
                  onChange={() => handleCheckboxChange("business")}
                  className="flex-start"
                />
                <label
                  htmlFor="business"
                  className="absolute inset-0 flex flex-col items-center justify-center "
                >
                  <Image
                    width="54"
                    height="54"
                    src="/images/icons/bussiness.png"
                    alt="business"
                    className="mb-2 h-11 w-11 md:h-[54px] md:w-[54px]"
                  />
                  기업 이벤트
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#047857] peer-checked:border-[#047857] peer-checked:text-[#047857] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  value="public"
                  id="public"
                  checked={selectedEvent === "public"}
                  onChange={() => handleCheckboxChange("public")}
                  className="flex-start"
                />
                <label
                  htmlFor="public"
                  className="absolute inset-0 flex flex-col items-center justify-center "
                >
                  <Image
                    width="54"
                    height="54"
                    src="/images/icons/public.png"
                    alt="public"
                    className="mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
                  />
                  사회 단체행사
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#7C3AED] peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{
                    accentColor: buttonBackground,
                    alignSelf: "flex-start",
                  }}
                  type="checkbox"
                  value="festival"
                  id="festival"
                  checked={selectedEvent === "festival"}
                  onChange={() => handleCheckboxChange("festival")}
                />
                <label
                  htmlFor="festival"
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <Image
                    width="64"
                    height="64"
                    src="/images/icons/festival2.png"
                    alt="festival"
                    className="h-10 w-10 md:h-[64px] md:w-[64px]"
                  />
                  기관, 축제등
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#9D174D] peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  value="birthday"
                  id="birthday"
                  checked={selectedEvent === "birthday"}
                  onChange={() => handleCheckboxChange("birthday")}
                  className="flex-start"
                />
                <label
                  htmlFor="birthday"
                  className="absolute inset-0 flex flex-col items-center justify-center "
                >
                  <Image
                    width="54"
                    height="54"
                    src="/images/icons/birthday.png"
                    alt="birthday"
                    className="mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
                  />
                  가족 개인행사
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#FE0000] peer-checked:border-[#FE0000] peer-checked:text-[#FE0000] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{
                    accentColor: buttonBackground,
                    alignSelf: "flex-start",
                  }}
                  type="checkbox"
                  value="steak"
                  id="steak"
                  checked={selectedEvent === "steak"}
                  onChange={() => handleCheckboxChange("steak")}
                />
                <label
                  htmlFor="steak"
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <Image
                    src="/images/icons/steak.png"
                    alt="Steak icon"
                    width={50}
                    height={50}
                    className="mb-2 h-10 w-10 md:h-[50px] md:w-[50px]"
                  />
                  스테이크 행사
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#F8B400] peer-checked:border-[#F8B400] peer-checked:text-[#F8B400] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{
                    accentColor: buttonBackground,
                    alignSelf: "flex-start",
                  }}
                  type="checkbox"
                  value="fingerFood"
                  id="fingerFood"
                  checked={selectedEvent === "fingerFood"}
                  onChange={() => handleCheckboxChange("fingerFood")}
                />
                <label
                  htmlFor="fingerFood"
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <Image
                    src="/images/icons/fingerfood.png"
                    alt="Finger food icon"
                    width={50}
                    height={50}
                    className="mb-2 h-10 w-10 md:h-[50px] md:w-[50px]"
                  />
                  핑거푸드
                </label>
              </motion.div>

              <motion.div
                whileTap={checkboxAnimations}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px]  text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#C05621] peer-checked:border-[#C05621] peer-checked:text-[#C05621] md:m-2 md:h-32 md:w-32 md:text-[15px] xl:m-2"
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  id="otherEventType"
                  value="otherEventType"
                  checked={selectedEvent === "otherEventType"}
                  onChange={(e) => {
                    handleCheckboxChange(e.target.value)
                    handleRadioChange(e)
                  }}
                  className="flex-start"
                />
                <label
                  htmlFor="otherEventType"
                  className="absolute inset-0 flex flex-col items-center justify-center "
                >
                  <Image
                    width="54"
                    height="54"
                    src="/images/icons/other.png"
                    alt="other"
                    className="mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
                  />
                  기타 행사
                </label>
              </motion.div>

              {showOtherEventInput == "true" && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="mt-3 flex items-end justify-center xl:hidden"
                >
                  <input
                    type="text"
                    className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                    name="event_type"
                    placeholder="직접입력"
                    onChange={(e) => handleInputChange(e)}
                  />
                </motion.div>
              )}
            </div>

            <div className="flex w-full items-center justify-center">
              <motion.button
                style={
                  selectedEvent !== "" || eventTypeOther !== ""
                    ? { background: buttonBackground, color: "#fff" }
                    : {
                        background: "#F1F5F9",
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                disabled={
                  selectedEvent !== "" || eventTypeOther !== "" ? false : true
                }
                onClick={handleNext}
                type="submit"
                className=" text-md focus:bg-blue mt-5 h-[41px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Number of Attendees */}
        {currentQuestion === 1 && (
          <div className=" mx-auto w-full ">
            <motion.h4
              className="mb-5 flex items-center justify-center  text-[0.90rem] font-semibold lg:text-[1.2rem]"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                style={{ color: buttonBackground }}
                className="mr-2 h-8 w-8"
              />
              행사 참석 예상 인원을 선택해주세요
            </motion.h4>

            <div className="relative mt-10">
              <motion.div
                id="tickmarks"
                style={iconPositionForPeopleNum}
                className="absolute w-24 -translate-x-[42%] transform text-center  md:-translate-x-[39%] "
              >
                <FontAwesomeIcon
                  style={{ color: buttonBackground }}
                  icon={faPerson}
                  className="h-9 w-24 md:w-24"
                />
                <div className="flex items-center justify-center text-[18px] font-semibold">
                  {" "}
                  {sliderPeopleNum}
                  <span className="ml-1 text-[16px]">명</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-center justify-center"
              >
                <motion.input
                  style={{ accentColor: buttonBackground }}
                  type="range"
                  id="people_num"
                  min="0"
                  max="1000"
                  step="10"
                  className=" mb-10 mt-20 h-[1.5px] w-full cursor-pointer bg-slate-200 "
                  value={sliderPeopleNum}
                  required
                  name="people_count"
                  onChange={(e) => handleInputChange(e)}
                ></motion.input>
                {/* <p className="-translate-y-1.5 translate-x-8 transform text-[20px] font-bold md:translate-x-4"></p> */}
              </motion.div>
            </div>

            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setSelectedEvent("")
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2 "
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  sliderPeopleNum !== 0
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                disabled={sliderPeopleNum === 0 ? true : false}
                onClick={handleNext}
                type="submit"
                className=" text-md focus:bg-blue mt-5 h-[42px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Event Budget */}

        {currentQuestion === 2 && (
          <div className=" mx-auto w-full ">
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="mb-5 flex items-center justify-center  text-[1rem] text-lg font-semibold lg:text-[1.2rem]"
            >
              <FontAwesomeIcon
                icon={faSackDollar}
                style={{ color: buttonBackground }}
                className="mr-2 h-8 w-8"
              />
              식사 요청 예정금액 - 1인당
            </motion.h4>

            <div className="relative mt-10">
              <div
                id="tickmarks"
                style={iconPositionStart}
                className="absolute flex -translate-x-[80%] transform items-center justify-center md:-translate-x-[120%]"
              >
                <FontAwesomeIcon
                  style={{ color: buttonBackground }}
                  icon={faWonSign}
                  className="mr-[6px] h-4 w-4"
                />
                <div className="flex flex-row items-center justify-end text-[14px] font-semibold md:text-[17px]   ">
                  {sliderBudgetValStart.toLocaleString("ko-KR")}
                </div>
              </div>

              <motion.input
                style={{ accentColor: buttonBackground }}
                type="range"
                id="budget_num_start"
                min="10000"
                max="100000"
                step="5000"
                className="mb-10 mt-16 h-[1.5px] w-full cursor-pointer bg-slate-200"
                value={sliderBudgetValStart}
                required
                name="meal_cost"
                list="meal_budget_list"
                onChange={handleStartInputChange}
              />

              <datalist id="meal_budget_list">
                <option value="10000"></option>
                <option value="15000"></option>
                <option value="20000"></option>
                <option value="25000"></option>
                <option value="30000"></option>
                <option value="35000"></option>
                <option value="40000"></option>
                <option value="45000"></option>
                <option value="50000"></option>
                <option value="55000"></option>
                <option value="60000"></option>
                <option value="65000"></option>
                <option value="70000"></option>
                <option value="75000"></option>
                <option value="80000"></option>
                <option value="85000"></option>
                <option value="90000"></option>
                <option value="95000"></option>
                <option value="100000"></option>
              </datalist>
            </div>

            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setSliderPeopleNum(0)
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  sliderBudgetVal !== 0
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={sliderBudgetVal === 0 ? true : false}
                className=" text-md focus:bg-blue mt-5 h-[42px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Event Venue */}
        {currentQuestion === 3 && (
          <div className=" mx-auto mt-16 w-full md:mt-0">
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="mb-5 flex items-center justify-center  text-[1rem] font-semibold lg:text-[1.2rem]"
            >
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ color: buttonBackground }}
                className="mr-2 h-9 w-9 text-[#49111c]"
              />
              행사 예정 장소는 어디인가요?
            </motion.h4>

            <div className="flex flex-wrap justify-center">
              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background: checkedOption === "실내" ? buttonBackground : "",
                  color: checkedOption === "실내" ? "#fff" : "",
                  fontWeight: checkedOption === "실내" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg  hover:bg-indigo-50 md:m-2 md:h-28  md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="실내"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("실내")
                  }}
                />
                <span className="flex flex-col items-center justify-center  text-[14px] md:text-[16px]">
                  {checkedOption === "실내" ? (
                    <Image
                      src="/images/icons/eventPlace/indoor-white.png"
                      alt="indoor icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/indoor.png"
                      alt="indoor icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  )}
                  실내
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background: checkedOption === "야외" ? buttonBackground : "",
                  color: checkedOption === "야외" ? "#fff" : "",
                  fontWeight: checkedOption === "야외" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2 md:h-28 md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="야외"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("야외")
                  }}
                />

                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "야외" ? (
                    <Image
                      src="/images/icons/eventPlace/outdoor-white.png"
                      alt="outdoor icon"
                      width={45}
                      height={45}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/outdoor.png"
                      alt="outdoor icon"
                      width={45}
                      height={45}
                      className="mb-[2px]"
                    />
                  )}
                  야외
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background:
                    checkedOption === "체육관" ? buttonBackground : "",
                  color: checkedOption === "체육관" ? "#fff" : "",
                  fontWeight: checkedOption === "체육관" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2  md:h-28 md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="체육관"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("체육관")
                  }}
                />
                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "체육관" ? (
                    <Image
                      src="/images/icons/eventPlace/gym-white.png"
                      alt="gym icon"
                      width={45}
                      height={45}
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/gym.png"
                      alt="gym icon"
                      width={45}
                      height={45}
                    />
                  )}
                  체육관
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background:
                    checkedOption === "연회장" ? buttonBackground : "",
                  color: checkedOption === "연회장" ? "#fff" : "",
                  fontWeight: checkedOption === "연회장" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2  md:h-28 md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="연회장"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("연회장")
                  }}
                />
                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "연회장" ? (
                    <Image
                      src="/images/icons/eventPlace/banquet-white.png"
                      alt="banquet icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/banquet.png"
                      alt="banquet icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  )}
                  연회장
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background: checkedOption === "호텔" ? buttonBackground : "",
                  color: checkedOption === "호텔" ? "#fff" : "",
                  fontWeight: checkedOption === "호텔" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2 md:h-28  md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="호텔"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("호텔")
                  }}
                />
                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "호텔" ? (
                    <Image
                      src="/images/icons/eventPlace/hotel-white.png"
                      alt="hotel icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/hotel.png"
                      alt="hotel icon"
                      width={40}
                      height={40}
                      className="mb-[2px]"
                    />
                  )}
                  호텔
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background: checkedOption === "미정" ? buttonBackground : "",
                  color: checkedOption === "미정" ? "#fff" : "",
                  fontWeight: checkedOption === "미정" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2 md:h-28  md:w-28 xl:m-4 "
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="미정"
                  onChange={(e) => {
                    handleInputChange(e)
                    setCheckedOption("미정")
                  }}
                />
                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "미정" ? (
                    <Image
                      src="/images/icons/eventPlace/unknown-white.png"
                      alt="unknown icon"
                      width={38}
                      height={38}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/unknown.png"
                      alt="unknown icon"
                      width={38}
                      height={38}
                      className="mb-[2px]"
                    />
                  )}
                  미정
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  background: checkedOption === "기타" ? buttonBackground : "",
                  color: checkedOption === "기타" ? "#fff" : "",
                  fontWeight: checkedOption === "기타" ? "600" : "",
                }}
                className="relative m-1 flex h-20  w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2  md:h-28 md:w-28 xl:m-4"
              >
                <input
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  type="radio"
                  required
                  name="event_place"
                  value="otherPlace"
                  onChange={(e) => {
                    handleRadioChange(e)
                    setCheckedOption("기타")
                  }}
                  placeholder="직접 입력"
                />
                <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
                  {checkedOption === "기타" ? (
                    <Image
                      src="/images/icons/eventPlace/custom-white.png"
                      alt="custom input's icon"
                      width={38}
                      height={38}
                      className="mb-[2px]"
                    />
                  ) : (
                    <Image
                      src="/images/icons/eventPlace/custom.png"
                      alt="custom input's icon"
                      width={38}
                      height={38}
                      className="mb-[2px]"
                    />
                  )}
                  기타
                </span>
              </motion.label>

              {showInputOtherPlace === "true" && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="mt-3 flex items-end justify-center"
                >
                  <input
                    type="text"
                    className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                    name="event_place"
                    placeholder="직접입력"
                    onChange={handleInputChange}
                  />
                </motion.div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setSliderBudgetNum(0)
                  setSliderBudgetValStart(0)
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  eventVenue !== ""
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={eventVenue === "" ? true : false}
                className=" text-md focus:bg-blue mt-5 h-[42px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Event accessory */}

        {currentQuestion === 4 && (
          <div className=" date-div tool-div mx-auto mb-0 mt-16 flex h-full w-full  flex-col justify-center  md:mt-0 ">
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="mb-5 flex items-center justify-center  text-lg font-semibold lg:text-[1.2rem]"
            >
              <FontAwesomeIcon
                icon={faChair}
                style={{ color: buttonBackground }}
                className="mr-2 h-9 w-9"
              />
              <span className="flex flex-col items-center justify-center">
                귀 행사에 필요한 품목을 고르세요
                <br />
                <p className="text-sm text-slate-600">* 별도 품목입니다 </p>
                <p className="text-sm text-slate-600">
                  ( 행사에 따라 서비스 품목 있습니다 ){" "}
                </p>
              </span>
            </motion.h4>

            <div className="grid grid-cols-3 justify-center md:flex md:flex-wrap">
              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={1}
                  onChange={handleCheckboxAccesories}
                />

                <span className="pl-1 text-[12px] md:text-[15px]">
                  사각 테이블
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28  md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={2}
                  onChange={handleCheckboxAccesories}
                />

                <span className="pl-1 text-[12px] md:text-[15px]">
                  원탁테이블
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28  md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={3}
                  onChange={handleCheckboxAccesories}
                />

                <span className="pl-1 text-[12px] md:text-[15px]">
                  스텐딩 <br />
                  테이블
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={4}
                  onChange={handleCheckboxAccesories}
                />

                <span className="pl-1 text-[12px] md:text-[15px]">의자</span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={5}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  의자커버
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="cursor-pointerr relative m-1 flex h-16 w-[85px]  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={6}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  자바라 텐트 (3m * 6m)
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={7}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  몽골텐트 (5m * 5m)
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3 "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={8}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">단상</span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28  md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={9}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  기본음향
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={10}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">무대</span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28  md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={11}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">진행</span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={12}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  마스터 밴드
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={13}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  플래카드
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20  md:w-28 md:justify-center xl:m-3  "
              >
                <input
                  style={{ accentColor: buttonBackground }}
                  type="checkbox"
                  required
                  name="tool"
                  value={14}
                  onChange={handleCheckboxAccesories}
                />
                <span className="pl-1 text-[12px] md:text-[15px]">
                  필요없음
                </span>
              </motion.label>

              <motion.label
                whileTap={checkboxAnimationsGeneral}
                whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28  md:justify-center xl:m-3"
              >
                <input
                  type="radio"
                  required
                  name="tool"
                  value="otherTool"
                  onChange={handleRadioChange}
                  placeholder="직접 입력"
                  style={{ accentColor: buttonBackground }}
                />
                <span className="pl-1 text-[14px] md:text-[17px]">기타</span>
              </motion.label>

              {showOtherToolInput == "true" && (
                <div className="mt-3 flex items-end justify-center pb-2">
                  <input
                    type="text"
                    className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                    placeholder="직접입력"
                    name="tool"
                    onChange={handleCheckboxAccesoriesOther}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setEventVenue("")
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  selectedAccesories.length !== 0
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={selectedAccesories.length === 0 ? true : false}
                className=" text-md focus:bg-blue mt-5 h-[42px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Event Date */}
        {currentQuestion === 5 && (
          <div className=" date-div  mt-5 flex w-full flex-col">
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="mb-5 flex items-center justify-center   text-lg font-semibold lg:text-[1.2rem]"
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: buttonBackground }}
                className="mr-2 h-9 w-9"
              />
              행사 예상 시간을 선택해주세요
            </motion.h4>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="  flex  items-center justify-center md:w-full"
            >
              <style>{css}</style>
              <DayPicker
                mode="single"
                selected={eventDate}
                onSelect={handleDaySelect}
                locale={ko}
                disabled={disabledDays}
                styles={{
                  caption: { color: `${buttonBackground}` },
                }}
                modifiersClassNames={{
                  selected: "my-selected",
                  today: "my-today",
                }}
                modifiersStyles={{
                  disabled: { fontSize: "95%" },
                }}
                footer={
                  <>
                    <p>
                      시간 선택하기:{" "}
                      <input
                        type="time"
                        value={timeValue}
                        onChange={handleTimeChange}
                        className={`hover:bg-[${buttonBackground}] color-[${buttonBackground}]`}
                      />
                    </p>
                    {/* <p>
                      선택일자: {selected ? selected.toLocaleString() : "none"}
                    </p> */}
                  </>
                }
              />
            </motion.div>

            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[15%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  selectedAccesories.length = 0
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  eventDate !== currentDate
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={eventDate === currentDate ? true : false}
                className=" text-md focus:bg-blue mt-5 h-[41px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[25%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {/* Address of the Event */}
        {currentQuestion === 6 && (
          <>
            <AddressFinder
              setEventAddress={setEventAddress}
              buttonBackground={buttonBackground}
            />
            <div className="flex w-full items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setEventDate(new Date())
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  eventAddress !== ""
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={eventAddress === "" ? true : false}
                className=" text-md focus:bg-blue mt-5 h-[42px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </>
        )}

        {/* Name and Phone Number */}
        {currentQuestion === 7 && (
          <div className="mx-auto flex w-full flex-col items-center justify-center">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="mb-5 flex items-center justify-center   text-lg font-semibold lg:text-[1.2rem]"
            >
              <FontAwesomeIcon
                icon={faFileContract}
                style={{ color: buttonBackground }}
                className="mr-2 h-9 w-9"
              />
              연락처 정보를 입력하십시오
            </motion.h1>

            {/* Name */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.02,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="mt-10 flex w-full items-center justify-center md:w-[70%]"
            >
              {/* <label htmlFor="input2" className="block text-md font-medium text-[#49111c] ">이름</label> */}
              <div className="mr-3">
                <Image
                  src="/images/icons/name.png"
                  width={25}
                  height={25}
                  alt="Name icon"
                />
              </div>
              <input
                className="block h-10 w-full  border-b-[1px]  border-slate-200  pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px]"
                placeholder="이름"
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            {/* Phone number */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className=" mt-10 w-full  md:w-[70%]"
            >
              {/* <label htmlFor="input2" className="block text-md font-medium text-[#49111c]">
                전화번호
              </label> */}
              <div className="flex items-center justify-center">
                <div className="mr-3">
                  <Image
                    src="/images/icons/phone.png"
                    width={25}
                    height={25}
                    alt="Phone icon"
                  />
                </div>

                <input
                  type="tel"
                  id="input2"
                  name="phone_number"
                  required={true}
                  className={`phone_number_input block h-10 w-full border-b-[1px] border-slate-200 pr-3 text-[13px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px]`}
                  // placeholder="전화번호 - 숫자만 입력"
                  placeholder="- 없이 숫아만 입력"
                  //style={{'--placeholder-font-size' : '10px'}}
                  onChange={handlePhoneNumberChange}
                  pattern="^[0-9]{9,11}$" // Regular expression for 9 to 11 digits
                />
              </div>
              {phoneNumberError && (
                <p
                  className={`${
                    phoneNumberError === "완벽해요!"
                      ? "ml-9 mt-1  text-[12px] text-green-900"
                      : "ml-9  mt-1  text-[12px] text-red-500"
                  }`}
                >
                  {phoneNumberError}
                </p>
              )}
            </motion.div>

            <motion.div className="my-2 mt-10 flex w-full items-start justify-center  md:w-[70%]">
              <div className="mr-3">
                <Image
                  src="/images/icons/note.png"
                  width={25}
                  height={25}
                  alt="Notes icon"
                />
              </div>
              <textarea
                //type="textarea"
                rows={3}
                cols={30}
                className=" w-full resize-y border-b-[1px]  border-slate-200 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px] "
                placeholder="요청 사항"
                name="message"
                onChange={handleInputChange}
              ></textarea>
            </motion.div>

            <div className="flex w-full items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex items-center  justify-center py-2 text-[15px]  font-semibold tracking-wider underline  decoration-solid underline-offset-2  md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setEventAddress("")
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={
                  customerName !== "" && phoneNumber !== ""
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                    : {
                        background: `rgba(${parseInt(
                          buttonBackground.slice(1, 3),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(3, 5),
                          16
                        )}, ${parseInt(
                          buttonBackground.slice(5, 7),
                          16
                        )}, 0.3)`,
                        color: "#fff",
                        border: "1px solid #fff",
                      }
                }
                onClick={handleNext}
                type="submit"
                disabled={
                  customerName === "" && phoneNumber === "" ? true : false
                }
                className=" text-md focus:bg-blue mt-5 h-[41px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
                draggable="false"
              >
                <>
                  다음 <FontAwesomeIcon icon={faCaretRight} />
                </>
              </motion.button>
            </div>
          </div>
        )}

        {currentQuestion === 8 && (
          <>
            <div className="hidden xl:block">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <h1 className=" flex items-center justify-center text-[1rem] font-semibold md:text-[1.2rem]">
                  이벤트 세부 정보를 확인하세요{" "}
                </h1>
              </motion.div>
              <Image
                src={"/images/female-chef.jpg"}
                alt="salt-bae"
                width={400}
                height={600}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center xl:hidden">
              {/* <h1 className='text-[60px] mb-10 font-[500] '>Congratulation! </h1> */}

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="m-1 mb-5  text-[1rem] font-bold md:m-5"
              >
                이벤트 계획이 준비되었습니다!
              </motion.p>
              <h3 className="mb-2 py-1 text-sm text-slate-400 md:py-4">
                이벤트 세부 정보를 확인하세요{" "}
              </h3>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.02,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="items-between flex w-full flex-col justify-center  px-2 py-5 text-[0.8rem] font-bold md:w-[50%]  md:px-4 "
              >
                <div className="flex items-start justify-between">
                  <p>이벤트 유형: </p>{" "}
                  <span className="pl-1 font-light">
                    {formData.event_type === "wedding"
                      ? " 스몰웨딩, 야외결혼"
                      : formData.event_type === "business"
                      ? "기업 이벤트"
                      : formData.event_type === "public"
                      ? "사회 단체행사"
                      : formData.event_type === "festival"
                      ? "기관, 축제등"
                      : formData.event_type === "birthday"
                      ? "가족 개인행사"
                      : formData.event_type === "steak"
                      ? "스테이크 행사"
                      : formData.event_type === "fingerFood"
                      ? "핑거푸드"
                      : eventOtherType}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <p>출석인원: </p>{" "}
                  <span className="pl-1 font-light">
                    {formData.people_count} 명
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <p>식비: </p>{" "}
                  <span className="pl-1 font-light">
                    {formData.meal_cost} 원 ||{" "}
                    {formData.meal_cost * formData.people_count} 원
                  </span>{" "}
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>이벤트 날짜: </p>
                  <span className="pl-1 font-light">
                    {formattedDate + " " + formData.event_time}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>장소: </p>
                  <span className="pl-1 font-light">
                    {formData.event_place}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>필요한 품목: </p>
                  <span className="pl-1 font-light">
                    {toolNamesArr + " " + formData.customTool}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>주소: </p>
                  <span className="pl-1 font-light">{formData.address}</span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>이름: </p>
                  <span className="pl-1 font-light">{formData.name}</span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>전화번호: </p>
                  <span className="pl-1 font-light">
                    {formData.phone_number}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  {" "}
                  <p>추가 참고 사항: </p>
                  <span className="pl-1 font-light">{formData.message}</span>
                </div>
              </motion.div>
            </div>

            <div className="flex w-full items-center justify-center">
              <motion.button
                type="button"
                style={{ color: buttonBackground }}
                className="text-md  mr-7 mt-5 flex items-center  justify-center py-2 text-[15px]  font-semibold tracking-wider underline  decoration-solid underline-offset-2  md:w-[10%] md:text-[15px]"
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setCustomerName(""),
                    setPhoneNumber(""),
                    setCustomerMessage("")
                }}
              >
                <>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className="mr-1 h-5 w-2"
                  />{" "}
                  뒤로
                </>
              </motion.button>

              <motion.button
                style={{ background: buttonBackground, color: "#fff" }}
                onClick={() => {
                  handleNext()
                  router.push("/thank-you")
                }}
                type="submit"
                className=" text-md focus:bg-blue relative mt-5 h-[41px] w-[40%]  max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider  text-[#49111c] focus:outline-none md:w-[20%] md:text-[16px]"
                draggable="false"
              >
                <>
                  예약하기 <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                </>
              </motion.button>
            </div>
          </>
        )}

        <div
          className={`flex w-full flex-row items-center   ${
            currentQuestion < 1 ? "justify-center" : "justify-center"
          } ${currentQuestion > 8 ? "hidden" : "flex"}`}
        ></div>
      </form>
    </>
  )
}

export default Form
