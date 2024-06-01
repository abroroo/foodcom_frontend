import React, { useState } from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { budgetConfig } from "@/data/Budget/BudgetConfig"
import { faSackDollar, faWonSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"

interface BudgetQuestionProps {
  handleNext: () => void
  handlePrevious: () => void
}

interface BudgetFormType {
  meal_cost: number
}

export const BudgetQuestion = ({
  handleNext,
  handlePrevious,
}: BudgetQuestionProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BudgetFormType>()
  const { selectedEventColor, updateFormData } = useGlobalForm()

  const [sliderBudgetValStart, setSliderBudgetValStart] = useState(
    budgetConfig.initialValue
  )
  const iconPositionStyle = {
    left: `${(sliderBudgetValStart / budgetConfig.max) * 105}%`, // Adjust this based on your layout
  }

  const onSubmit: SubmitHandler<BudgetFormType> = (data) => {
    const updatedData = {
      ...data,
      meal_cost: Number(data.meal_cost), // Convert meal_cost to a number
    }

    if (updatedData.meal_cost >= budgetConfig.min) {
      updateFormData(updatedData)
      handleNext()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full">
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center text-lg font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faSackDollar}
          style={{ color: selectedEventColor }}
          className="mr-2 h-8 w-8"
        />
        식사 요청 예정금액 - 1인당
      </motion.h4>

      <div className="relative mt-10">
        <div
          id="tickmarks"
          style={iconPositionStyle}
          className="absolute flex -translate-x-[80%] transform items-center justify-center md:-translate-x-[120%]"
        >
          <FontAwesomeIcon
            style={{ color: selectedEventColor }}
            icon={faWonSign}
            className="mr-[6px] h-4 w-4"
          />
          <div className="flex flex-row items-center justify-end text-[14px] font-semibold md:text-[17px]">
            {sliderBudgetValStart.toLocaleString("ko-KR")}
          </div>
        </div>

        <motion.input
          style={{ accentColor: selectedEventColor }}
          type="range"
          id="budget_num_start"
          min={budgetConfig.min}
          max={budgetConfig.max}
          step={budgetConfig.step}
          className="mb-10 mt-16 h-[1.5px] w-full cursor-pointer bg-slate-200"
          value={sliderBudgetValStart}
          {...register("meal_cost", {
            required: "행사의 식사 비용을 선택해 주세요",
            min: {
              value: 10000,
              message: "최소 10,000원 이상을 선택해 주세요",
            },
          })}
          list="meal_budget_list"
          onChange={(e) =>
            setSliderBudgetValStart(parseInt(e.target.value, 10))
          }
        />

        <datalist id="meal_budget_list">
          {Array.from(
            { length: budgetConfig.max / budgetConfig.step + 1 },
            (_, index) => {
              const value = index * budgetConfig.step
              return <option key={value} value={value}></option>
            }
          )}
        </datalist>
      </div>

      {errors.meal_cost && (
        <div className="text-center text-sm text-red-500">
          {errors.meal_cost.message}
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
