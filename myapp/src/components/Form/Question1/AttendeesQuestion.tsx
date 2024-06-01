import React, { useState } from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { faPerson, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"

interface AttendeesQuestionProps {
  handleNext: () => void
  handlePrevious: () => void
}
interface EventAttendeeFormType {
  people_count: number
}
export const AttendeesQuestion = ({
  handleNext,
  handlePrevious,
}: AttendeesQuestionProps) => {
  const { selectedEventColor, updateFormData } = useGlobalForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventAttendeeFormType>()
  const [sliderPeopleNum, setSliderPeopleNum] = useState(0)

  const iconPositionForPeopleNum = {
    left: `${(sliderPeopleNum / 1000) * 94}%`, // Adjust this based on your layout
  }

  const onSubmit: SubmitHandler<EventAttendeeFormType> = (data) => {
    updateFormData(data)
    handleNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto w-full ">
      <motion.h4
        className="mb-5 flex items-center justify-center  text-[0.90rem] font-semibold lg:text-[1.2rem]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <FontAwesomeIcon
          icon={faUserGroup}
          style={{ color: selectedEventColor }}
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
            style={{ color: selectedEventColor }}
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
            style={{ accentColor: selectedEventColor }}
            type="range"
            id="people_num"
            min="0"
            max="1000"
            step="10"
            className=" mb-10 mt-20 h-[1.5px] w-full cursor-pointer bg-slate-200 "
            value={sliderPeopleNum}
            {...register("people_count", {
              required: "이 필드는 필수입니다",
              min: {
                value: 1,
                message: "이벤트 참석자는 0 보다 커야 합니다",
              },
            })}
            onChange={(e) => setSliderPeopleNum(parseInt(e.target.value, 10))}
          ></motion.input>
        </motion.div>
        {errors.people_count && (
          <div className="text-center text-sm text-red-500">
            {errors.people_count.message}
          </div>
        )}
      </div>
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
