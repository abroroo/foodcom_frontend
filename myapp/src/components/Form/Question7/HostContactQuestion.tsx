import React from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { ContactForm } from "@/components/Form/Question7/ContactForm"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { contactConfig } from "@/data/Contact/ContactConfig"
import { faFileContract } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from "react-hook-form"

type HostContactQuestionProps = {
  handleNext: () => void
  handlePrevious: () => void
}

type ContactFormType = {
  name: string
  phone_number: string
  message?: string
}
export const HostContactQuestion = ({
  handleNext,
  handlePrevious,
}: HostContactQuestionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>()
  const { updateFormData, selectedEventColor } = useGlobalForm()

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    updateFormData(data)
    handleNext()
  }

  console.log(errors)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center  text-lg font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faFileContract}
          style={{ color: selectedEventColor }}
          className="mr-2 h-9 w-9"
        />
        {contactConfig.title}
      </motion.h1>

      <ContactForm register={register} contactConfig={contactConfig} />

      <div className="flex w-full items-center justify-center">
        <PreviousButton
          handlePrevious={handlePrevious}
          color={selectedEventColor}
        />
        <NextButton color={selectedEventColor} />
      </div>
      {errors.name && (
        <p className="mt-2 text-center text-sm text-red-500">
          {errors.name.message}
        </p>
      )}
      {errors.phone_number && (
        <p className="mt-1 text-center text-sm text-red-500">
          {errors.phone_number.message}
        </p>
      )}
    </form>
  )
}
