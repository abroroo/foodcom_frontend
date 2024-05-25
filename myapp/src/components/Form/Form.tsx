import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface FormProps {
  eventTypeOther: string
  desktopOtherType: string
  onButtonBackgroundChange: (
    background: string,
    eventType: string,
    currentQuestion: number,
    formData: any
  ) => void
}
export const Form = ({
  onButtonBackgroundChange,
  eventTypeOther,
  desktopOtherType,
}: FormProps) => {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const totalQuestions = 9

  const [buttonBackground, setButtonBackground] = useState("#F1F5F9")

  const [formData, setFormData] = useState<any>({
    address: eventAddress,
    tool: selectedAccesories,
  })

  const [checkedOption, setCheckedOption] = useState("")

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

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

  const handleNext = (): void => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handlePrevious = (): void => {
    setCurrentQuestion(currentQuestion - 1)
  }

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
    } catch (error) {
      console.error(error)
    }
  }

  const handleStartInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target
    setSliderBudgetValStart(parseInt(value))
    setSliderBudgetNum(parseInt(value))
  }

  const handleCheckboxChange = (value: string) => {
    setSelectedEvent(value)

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
  }

  useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      address: eventAddress,
      tool: selectedAccesories,
      customTool: customTool,
      event_type: eventOtherType || desktopOtherType || selectedEvent,
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

  const checkboxAnimationsGeneral = {
    scale: [1.15, 1.25, 1],
    transition: {
      duration: 0.2,
    },
  }

  const checkboxAnimations = {
    scale: [1.1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  }

  return (
    <div>
      <h1>Form</h1>
    </div>
  )
}
