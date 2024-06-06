import React from "react"
import { DisplaySelectedValues } from "@/components/DisplayDetails/DisplaySelectedValues"
import { ShowPhotoWithCursorFollower } from "@/components/DisplayDetails/ShowPhotoWithCursorFollower"
import { ProgressIndicator } from "@/components/ProgressIndicator/ProgressIndicator"
import { useGlobalState } from "@/context/GlobalStateContext"
import { motion } from "framer-motion"

export const EventDetailsDesktop = () => {
  const { themeColor, currentStep, setCurrentStep } = useGlobalState()

  return (
    <div id="rightDiv" className="z-[200] hidden h-screen w-[40%]  xl:flex   ">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden ">
        <ShowPhotoWithCursorFollower currentStep={currentStep} />
        {currentStep >= 1 && currentStep !== 9 && (
          <DisplaySelectedValues currentStep={currentStep} />
        )}
      </div>
      // footer progress indicator
      {currentStep < 9 && (
        <div className="absolute hidden  h-screen w-screen bg-white md:block">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              bounce: 0.3,
            }}
            className=" fixed bottom-0 z-[100] h-12 w-full border border-slate-100 drop-shadow-2xl md:h-[4.5rem]"
          >
            <ProgressIndicator
              currentStep={currentStep}
              themeColor={themeColor}
            />
          </motion.div>
        </div>
      )}
    </div>
  )
}
