import React, { useState } from "react"

export const NumberOfPeopleQuestion = () => {
  const [sliderPeopleNum, setSliderPeopleNum] = useState(0)

  const iconPositionForPeopleNum = {
    left: `${(sliderPeopleNum / 1000) * 94}%`, // Adjust this based on your layout
  }

  return <div>AccessoriesQuestion</div>
}
