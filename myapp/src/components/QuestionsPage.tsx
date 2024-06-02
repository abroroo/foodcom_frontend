import React from "react"
import { EventDetailsDesktop } from "@/components/DisplayDetails/EventDetailsDesktop"

import Form from "./Form/Form"

export const QuestionsPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <Form />
      <EventDetailsDesktop />
    </div>
  )
}
