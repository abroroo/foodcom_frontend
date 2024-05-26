import React from "react"
import { NextButton } from "@/components/Button/NextButton"
// context / hooks / constants
import { useGlobalForm } from "@/context/GlobalFormContext"
import { eventsData } from "@/data/Event/EventData/eventsData"
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
  event_type?: string
  event_type_other?: string
}

export const EventTypeQuestion = ({ handleNext }: EventTypeQuestionProps) => {
  const { register, handleSubmit, watch } = useForm()
  const { formData, updateFormData } = useGlobalForm()
  const selectedEvent = watch("event_type", formData.event_type || "")

  const onSubmit: SubmitHandler<EventFormType> = (data) => {
    updateFormData(data)
    handleNext()
  }

  const selectedEventData = eventsData.find(
    (event) => event.value === selectedEvent
  )
  const selectedEventColor = selectedEventData?.color || "#F1F5F9"

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 flex flex-col items-center justify-center md:mt-0"
    >
      <h1 className="flex items-center justify-center text-[1rem] font-semibold lg:text-[1.2rem]">
        <PartyPopper className="mr-2 h-9 w-9" /> 어떤 행사를 계획하고 계십니까?
      </h1>
      <div className="mt-5 flex flex-wrap justify-between md:mt-4">
        {/* Map over event types here */}
        {eventsData.map((event) => (
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
              {...register("event_other_value")}
            />
          </motion.div>
        )}
      </div>
      <NextButton color={selectedEventColor} />
    </form>
  )
}
