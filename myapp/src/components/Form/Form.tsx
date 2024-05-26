import React, { useState } from "react"
import { EventTypeQuestion } from "@/components/Form/Question0/EventTypeQuestion"
import { BudgetQuestion } from "@/components/Form/Question2/BudgetQuestion"
import { GlobalFormProvider } from "@/context/GlobalFormContext"

import { NumberOfPeopleQuestion } from "./Question1/NumberOfPeopleQuestion"

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
          <NumberOfPeopleQuestion
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
        {/*{currentQuestion === 3 && (*/}
        {/*  <Question3 handleNext={handleNext} handlePrevious={handlePrevious} />*/}
        {/*)}*/}
        {/*{currentQuestion === 4 && (*/}
        {/*  <Question4 handleNext={handleNext} handlePrevious={handlePrevious} />*/}
        {/*)}*/}
        {/*{currentQuestion === 5 && (*/}
        {/*  <Question5 handleNext={handleNext} handlePrevious={handlePrevious} />*/}
        {/*)}*/}
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
