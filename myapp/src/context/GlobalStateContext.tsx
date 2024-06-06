import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react"

import { GlobalStateContextValueType } from "@/types/context/GlobalStateContextType"

interface GlobalStateProviderProps {
  children: ReactNode
}

const GlobalStateContext = createContext<GlobalStateContextValueType>(
  {} as GlobalStateContextValueType
)

export const useGlobalState = (): GlobalStateContextValueType => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider")
  }
  return context
}

export const GlobalStateProvider: FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [themeColor, setThemeColor] = useState("#F1F5F9")
  const [event, setEvent] = useState("")

  return (
    <GlobalStateContext.Provider
      value={{
        themeColor,
        setThemeColor,
        currentStep,
        setCurrentStep,
        event,
        setEvent,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
