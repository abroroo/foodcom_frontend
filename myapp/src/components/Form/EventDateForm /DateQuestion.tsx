import React, { useState } from "react"

export const DateQuestion = () => {
  const [eventDate, setEventDate] = useState<Date>()

  const [timeValue, setTimeValue] = React.useState<string>("00:00")
  const disabledDays = [{ from: new Date(2022, 4, 18), to: new Date() }]
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(eventDate)

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const time = e.target.value
    if (eventDate) {
      setTimeValue(time)
      return
    }
  }

  const handleDaySelect = (date: Date | undefined): void => {
    if (date) {
      setEventDate(date)
      return
    }
  }

  return <div>AccessoriesQuestion</div>
}
