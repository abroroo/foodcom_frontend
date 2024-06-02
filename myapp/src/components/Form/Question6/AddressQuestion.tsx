import React, { useState } from "react"
import { NextButton } from "@/components/Button/NextButton"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { SubmitHandler, useForm } from "react-hook-form"

import AddressFinder from "./AddressFinder"

type AddressQuestionProps = {
  handleNext: () => void
  handlePrevious: () => void
}

export type AddressFormType = {
  address: string
}

export const AddressQuestion = ({
  handleNext,
  handlePrevious,
}: AddressQuestionProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<AddressFormType>()

  const { formData, updateFormData, selectedEventColor } = useGlobalForm()
  const selectedAddress = watch("address", formData.address || "")
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const onSubmit: SubmitHandler<AddressFormType> = (data) => {
    if (selectedAddress.length === 0) {
      setShowErrorMessage(true) // Show error message if address is not selected
      return // Prevent submission if address is not selected
    }
    updateFormData(data)
    handleNext()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center"
    >
      <AddressFinder
        setEventAddress={setValue} // Pass the setValue function to update form data
        buttonBackground={selectedEventColor}
      />
      <div className="flex w-full items-center justify-center">
        <PreviousButton
          handlePrevious={handlePrevious}
          color={selectedEventColor}
        />
        <NextButton color={selectedEventColor} />
      </div>
      {showErrorMessage && selectedAddress.length === 0 && (
        <p className="mt-2 text-center text-sm text-red-500">
          주서를 선택해주세요.
        </p>
      )}
    </form>
  )
}
