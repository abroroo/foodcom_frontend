import React from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { VenueConfig } from "@/data/Venue/VenueConfig"
import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"

import VenueCheckbox from "./VenueCheckbox"

interface VenueQuestionProps {
  handleNext: () => void
  handlePrevious: () => void
}
interface VenueFormType {
  event_place: string
  custom_event_place?: string
}
export const VenueQuestion = ({
  handleNext,
  handlePrevious,
}: VenueQuestionProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<VenueFormType>()
  const { formData, updateFormData, selectedEventColor } = useGlobalForm()

  const selectedVenue = watch("event_place", formData.event_place || "")

  const onSubmit: SubmitHandler<VenueFormType> = (data) => {
    updateFormData(data)
    handleNext()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-16 w-full md:mt-0"
    >
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center text-[1rem] font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faBuilding}
          style={{ color: selectedEventColor }}
          className="mr-2 h-9 w-9 text-[#49111c]"
        />
        행사 예정 장소는 어디인가요?
      </motion.h4>

      <div className="flex flex-wrap justify-center">
        {VenueConfig.map((venue) => (
          <VenueCheckbox
            key={venue.id}
            value={venue.value}
            label={venue.label}
            imgSrc={venue.imgSrc}
            imgSrcWhite={venue.imgSrcWhite}
            color={selectedEventColor}
            register={register}
            selectedVenue={selectedVenue}
          />
        ))}
      </div>

      {selectedVenue === "기타" && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mt-3 flex items-end justify-center"
        >
          <input
            type="text"
            className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px] border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
            {...register("custom_event_place", {
              validate: (value) =>
                selectedVenue !== "기타" || value?.trim() !== "",
            })}
            placeholder="직접입력"
          />
        </motion.div>
      )}

      {errors.event_place && (
        <div className="text-center text-sm text-red-500">
          {errors.event_place.message}
        </div>
      )}
      <div className="flex items-center justify-center">
        <PreviousButton
          handlePrevious={handlePrevious}
          color={selectedEventColor}
        />
        <NextButton color={selectedEventColor} />
      </div>
    </form>
  )
}
