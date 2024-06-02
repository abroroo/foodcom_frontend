import React from "react"
import { QuestionsPage } from "@/components/QuestionsPage"
import { GlobalStateProvider } from "@/context/GlobalStateContext"

export const App = () => {
  return (
    <GlobalStateProvider>
      <QuestionsPage />
    </GlobalStateProvider>
  )
}
