import React from "react"
import DisplayPeople from "@/components/DisplayDetails/DisplayInputs/DispayPeople"
import { DisplayAddress } from "@/components/DisplayDetails/DisplayInputs/DisplayAddress"
import { DisplayBudget } from "@/components/DisplayDetails/DisplayInputs/DisplayBudget"
import { DisplayDate } from "@/components/DisplayDetails/DisplayInputs/DisplayDate"
import DisplayEvent from "@/components/DisplayDetails/DisplayInputs/DisplayEvent"
import { DisplayMessage } from "@/components/DisplayDetails/DisplayInputs/DisplayMessage"
import { DsiplayName } from "@/components/DisplayDetails/DisplayInputs/DisplayName"
import { DisplayPhone } from "@/components/DisplayDetails/DisplayInputs/DisplayPhone"
import { DisplayTools } from "@/components/DisplayDetails/DisplayInputs/DisplayTools"
import { DisplayVenue } from "@/components/DisplayDetails/DisplayInputs/DisplayVenue"

type DisplaySelectedValuesProps = {
  currentStep: number
}

export const DisplaySelectedValues = ({
  currentStep,
}: DisplaySelectedValuesProps) => {
  return (
    <div className=" hidden h-full w-full flex-col items-center justify-center xl:flex">
      <div className="flex items-center justify-between">
        {currentStep >= 1 && <DisplayEvent />}
        {currentStep >= 2 && <DisplayPeople />}
      </div>
      <div className="flex items-center justify-between">
        {currentStep >= 3 && <DisplayBudget />}
        {currentStep >= 4 && <DisplayVenue />}
      </div>
      <div className="flex w-[70%] items-center justify-start ">
        {currentStep >= 5 && <DisplayTools />}
      </div>
      <div className="flex w-[100%] items-center justify-start">
        {currentStep >= 6 && <DisplayDate />}
        {currentStep >= 7 && <DisplayAddress />}
      </div>
      <div className="flex items-center justify-between">
        {currentStep >= 8 && <DsiplayName />}
        {currentStep >= 8 && <DisplayPhone />}
      </div>
      <div className="flex w-full items-center justify-start">
        {currentStep >= 8 && <DisplayMessage />}
      </div>
    </div>
  )
}
