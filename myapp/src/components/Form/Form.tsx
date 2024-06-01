import React, { useState } from "react"
import { EventTypeQuestion } from "@/components/Form/Question0/EventTypeQuestion"
import { BudgetQuestion } from "@/components/Form/Question2/BudgetQuestion"
import { AccessoriesQuestion } from "@/components/Form/Question4/AccessoriesQuestion"
import { DateQuestion } from "@/components/Form/Question5/DateQuestion"
import { GlobalFormProvider } from "@/context/GlobalFormContext"

import { AttendeesQuestion } from "./Question1/AttendeesQuestion"
import { VenueQuestion } from "./Question3/VenueQuestion"

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const totalQuestions = 9

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1)
  }

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1)
  }

  return (
    <GlobalFormProvider>
      <div className="text-non-selectable flex h-full w-full flex-col items-center justify-center overflow-y-scroll bg-opacity-[0.98] p-10 md:overflow-y-hidden md:p-28 md:px-20">
        {currentQuestion === 0 && <EventTypeQuestion handleNext={handleNext} />}
        {currentQuestion === 1 && (
          <AttendeesQuestion
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {currentQuestion === 2 && (
          <BudgetQuestion
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {currentQuestion === 3 && (
          <VenueQuestion
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {currentQuestion === 4 && (
          <AccessoriesQuestion
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {currentQuestion === 5 && (
          <DateQuestion
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
        {/*{currentQuestion === 6 && (*/}
        {/*  <Question6 handleNext={handleNext} handlePrevious={handlePrevious} />*/}
        {/*)}*/}
        {/*{currentQuestion === 7 && (*/}
        {/*  <Question7 handleNext={handleNext} handlePrevious={handlePrevious} />*/}
        {/*)}*/}
        {/*{currentQuestion === 8 && <Question8 handleNext={handleNext} />}*/}
      </div>
    </GlobalFormProvider>
  )
}

export default Form
