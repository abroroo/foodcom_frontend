import React from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { AccessoriesCheckbox } from "@/components/Form/Question4/AccessoriesCheckbox"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { toolConfig } from "@/data/Accessories/AccessoriesConfig"
import { faChair } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"

interface AccessoriesQuestionProps {
  handleNext: () => void
  handlePrevious: () => void
}

type AccessoriesFormType = {
  tool: string[]
  customTool: string
}
export const AccessoriesQuestion = ({
  handleNext,
  handlePrevious,
}: AccessoriesQuestionProps) => {
  const { formData, updateFormData, selectedEventColor } = useGlobalForm()
  const { register, handleSubmit, watch } = useForm<AccessoriesFormType>()

  const selectedTool = watch("tool", formData.tool || [])

  const onSubmit: SubmitHandler<AccessoriesFormType> = (data) => {
    // remove 키타
    if (data.tool.length > 0 && data.tool.includes("14")) {
      data.tool = data.tool.filter((item) => item !== "14")
    }
    if (!data.tool) {
      data.tool = []
    }
    if (!data.customTool) {
      data.customTool = ""
    }
    updateFormData(data)
    handleNext()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" date-div tool-div mx-auto mb-0 mt-16 flex h-full w-full  flex-col justify-center  md:mt-0 "
    >
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center  text-lg font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faChair}
          style={{ color: selectedEventColor }}
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

      <div className="flex flex-wrap justify-center">
        {toolConfig.map((tool) => (
          <AccessoriesCheckbox
            key={tool.id}
            value={tool.value}
            label={tool.label}
            color={selectedEventColor}
            register={register}
            selectedTool={selectedTool}
          />
        ))}
      </div>

      {selectedTool.includes("14") && (
        <div className="mt-3 flex items-end justify-center pb-2">
          <input
            type="text"
            className="my-2 ml-4 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
            placeholder="직접입력"
            {...register("customTool", {
              validate: (value) =>
                selectedTool.includes("14") && value?.trim() !== "",
            })}
          />
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
