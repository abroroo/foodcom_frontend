import React from "react"
import { DisplaySelectedValues } from "@/components/Sections/DisplayDetails/DisplaySelectedValues"
import { ShowPhotoWithCursorFollower } from "@/components/Sections/DisplayDetails/ShowPhotoWithCursorFollower"
import { useGlobalState } from "@/context/GlobalStateContext"

export const EventDetailsDesktop = () => {
  const { themeColor, currentStep, setCurrentStep } = useGlobalState()

  return (
    <div id="rightDiv" className=" hidden  w-[60%] xl:flex  ">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden ">
        <ShowPhotoWithCursorFollower currentStep={currentStep} />
        {currentStep >= 1 && currentStep !== 9 && (
          <DisplaySelectedValues currentStep={currentStep} />
        )}
      </div>
    </div>
  )
}
