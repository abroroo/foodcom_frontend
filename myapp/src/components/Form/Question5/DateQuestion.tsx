import React from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ko from "date-fns/locale/ko"
import { motion } from "framer-motion"
import { DayPicker } from "react-day-picker"
import { SubmitHandler, useForm } from "react-hook-form"

type DateQuestionProps = {
  handleNext: () => void
  handlePrevious: () => void
}

type DateFormType = {
  event_date: Date
  event_time: string
}

export const DateQuestion = ({
  handleNext,
  handlePrevious,
}: DateQuestionProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DateFormType>()
  const { formData, updateFormData, selectedEventColor } = useGlobalForm()

  const selectedDate = watch("event_date", formData.event_date || undefined)
  const selectedTime = watch("event_time", formData.event_time || "")

  const onSubmit: SubmitHandler<DateFormType> = (data) => {
    const formattedDateToISO = data.event_date.toISOString()
    updateFormData({ ...data, event_date: formattedDateToISO })
    handleNext()
  }

  const handleDaySelect = (date: Date | undefined): void => {
    if (date) {
      setValue("event_date", date, { shouldValidate: true })
    }
  }

  const disabledDays = [{ from: new Date(2022, 4, 18), to: new Date() }]

  // FOR DAY PICKER
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: ${selectedEventColor};
    color: ${selectedEventColor};
  }
  .my-today { 
    font-weight: bold;
    font-size: 100%; 
    color: red;
  }
  `

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="date-div mt-5 flex w-full flex-col"
    >
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center text-lg font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faCalendarDays}
          style={{ color: selectedEventColor }}
          className="mr-2 h-9 w-9"
        />
        행사일자, 예상 시간을 선택해주세요
      </motion.h4>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="flex flex-col items-center justify-center md:w-full"
      >
        <style>{css}</style>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDaySelect}
          locale={ko}
          {...register("event_date", {
            required: "행사 날짜를 선택해주세요",
          })}
          disabled={disabledDays}
          styles={{
            caption: {
              color: `${selectedEventColor} `,
            },
          }}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
          }}
          modifiersStyles={{
            disabled: { fontSize: "95%" },
          }}
          footer={
            <div className="flex p-4">
              <p className="mr-2 flex items-center justify-center ">
                시간 선택하기:{"  "}
              </p>
              <input
                type="time"
                step="1800"
                value={selectedTime}
                {...register("event_time", {
                  required: "행사 시간을 선택해주세요",
                })}
                className={`w-36 p-1 hover:bg-[${selectedEventColor}] color-[${selectedEventColor}] text-[${selectedEventColor}] border-[1px] border-solid border-[${selectedEventColor}] w-24 rounded-md p-1 text-center`}
              />
            </div>
          }
        />
      </motion.div>
      {errors.event_date && (
        <div className="text-center text-sm text-red-500">
          {errors.event_date.message}
        </div>
      )}
      {errors.event_time && (
        <div className="text-center text-sm text-red-500">
          {errors.event_time.message}
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
