import React from "react"
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
  const selectedAddress = watch("address", formData.address || " ")
  console.log(
    "This is the selected address: ",
    selectedAddress,
    selectedAddress.length > 0
  )

  const onSubmit: SubmitHandler<AddressFormType> = (data) => {
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
        <NextButton
          color={selectedEventColor}
          disabled={selectedAddress.length === 0} // TODO: has to disable if address is not selected
        />
      </div>
    </form>
  )
}
