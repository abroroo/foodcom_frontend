import React, { useEffect } from "react"
import { NextButton } from "@/components/Button/NextButton"
// context / hooks / constants
import { useGlobalForm } from "@/context/GlobalFormContext"
import { useGlobalState } from "@/context/GlobalStateContext"
import { EventsConfig } from "@/data/Event/EventData/EventsConfig"
//media
import { motion } from "framer-motion"
import { PartyPopper } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"

//components
import { EventsCheckbox } from "./EventsCheckbox"

interface EventTypeQuestionProps {
  handleNext: () => void
}

interface EventFormType {
  event_type: string
  event_other_value?: string
}

export const EventTypeQuestion = ({ handleNext }: EventTypeQuestionProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventFormType>()
  const {
    formData,
    updateFormData,
    selectedEventColor,
    setSelectedEventColor,
  } = useGlobalForm()

  const selectedEvent = watch("event_type", formData.event_type || "")
  const { setThemeColor, setEvent, themeColor } = useGlobalState()
  const onSubmit: SubmitHandler<EventFormType> = (data) => {
    const combinedData = {
      ...data,
      event_type:
        data.event_type === "otherEvent"
          ? data.event_other_value
          : data.event_type,
    }
    delete combinedData.event_other_value

    updateFormData(combinedData)
    handleNext()
  }

  useEffect(() => {
    const selectedEventData = EventsConfig.find(
      (event) => event.value === selectedEvent
    )
    if (selectedEventData) {
      setEvent(selectedEvent)
      setSelectedEventColor(selectedEventData.color)
      setThemeColor(selectedEventData.color)
    }
  }, [selectedEvent, setSelectedEventColor])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 flex flex-col items-center justify-center md:mt-0"
    >
      <h1 className="flex items-center justify-center text-[1rem] font-semibold lg:text-[1.2rem]">
        <PartyPopper style={{ color: themeColor }} className="mr-2 h-9 w-9" />{" "}
        어떤 행사를 계획하고 계십니까?
      </h1>
      <div className="mt-5 flex flex-wrap justify-between md:mt-4">
        {/* Map over event types here */}
        {EventsConfig.map((event) => (
          <EventsCheckbox
            key={event.id}
            id={event.id}
            value={event.value}
            iconSrc={event.iconSrc}
            color={event.color}
            label={event.label}
            selectedEvent={selectedEvent}
            register={register}
          />
        ))}
        {selectedEvent === "otherEvent" && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="mt-3 flex items-end justify-center "
          >
            <input
              type="text"
              className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px] border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
              placeholder="직접입력"
              {...register("event_other_value", {
                validate: (value) =>
                  selectedEvent !== "otherEvent" ||
                  value?.trim() !== "" ||
                  "기타 행사 유형을 입력해 주세요",
              })}
            />
          </motion.div>
        )}
      </div>
      {errors.event_type && (
        <div className="text-center text-sm text-red-500">
          {errors.event_type.message}
        </div>
      )}
      {selectedEvent === "otherEvent" && errors.event_other_value && (
        <div className="mt-3 text-center text-sm text-red-500">
          기타 행사 유형을 입력해 주세요
        </div>
      )}
      <NextButton color={selectedEventColor} />
    </form>
  )
}
