import React, { useState } from "react"

export const BudgetQuestion = () => {
  const [sliderBudgetVal, setSliderBudgetNum] = useState(0)
  const [sliderBudgetValStart, setSliderBudgetValStart] = useState(0)
  const iconPositionStart = {
    left: `${(sliderBudgetValStart / 100000) * 105}%`, // Adjust this based on your layout
  }

  // Handle changes in range inputs
  const handleStartInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target
    setSliderBudgetValStart(parseInt(value))
    setSliderBudgetNum(parseInt(value))
  }

  return <div>AccessoriesQuestion</div>
}
