import React from "react"
import { EventDetailsDesktop } from "@/components/DisplayDetails/EventDetailsDesktop"
import { ProgressIndicator } from "@/components/ProgressIndicator/ProgressIndicator"
import { GlobalFormProvider } from "@/context/GlobalFormContext"
import { useGlobalState } from "@/context/GlobalStateContext"
import { motion } from "framer-motion"

import Form from "./Form/Form"

export const QuestionsPage = () => {
  const { currentStep, themeColor } = useGlobalState()
  return (
    <GlobalFormProvider>
      <div className="text-non-selectable flex h-screen w-screen overflow-y-hidden">
        <div className="flex h-full w-full items-center justify-between">
          <Form />
          <EventDetailsDesktop />
        </div>

        {currentStep < 9 && (
          <div className="absolute hidden  bg-white md:block">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                bounce: 0.3,
              }}
              className=" fixed bottom-0  h-12 w-full border border-slate-100 drop-shadow-2xl md:h-[4.5rem]"
            >
              <ProgressIndicator
                currentStep={currentStep}
                themeColor={themeColor}
              />
            </motion.div>
          </div>
        )}
      </div>
    </GlobalFormProvider>
  )
}
