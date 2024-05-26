import React from "react"
// context / hooks / constants
import { useGlobalForm } from "@/context/GlobalFormContext"
import { eventsData } from "@/data/Event/EventTypes/eventTypesData"
//media
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
            key={event.value}
            value={event.value}
            iconSrc={event.iconSrc}
            label={event.label}
            selectedEvent={selectedEvent}
            register={register}
          />
        ))}
        {selectedEvent === "otherEventType" && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="mt-3 flex items-end justify-center xl:hidden"
          >
            <input
              type="text"
              className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px] border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
              placeholder="직접입력"
              {...register("event_type_other")}
            />
          </motion.div>
        )}
      </div>
      <div className="flex w-full items-center justify-center">
        <motion.button
          type="submit"
          className="text-md focus:bg-blue mt-5 h-[41px] w-[40%] max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
          draggable="false"
        >
          다음 <FontAwesomeIcon icon={faCaretRight} />
        </motion.button>
      </div>
    </form>
  )
}
