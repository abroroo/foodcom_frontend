import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react"

import {
  FormDataType,
  GlobalFormContextValueType,
} from "@/types/context/GlobalFormContextTypes"

interface GlobalFormProviderProps {
  children: ReactNode
}

const GlobalFormContext = createContext<GlobalFormContextValueType | undefined>(
  undefined
)

export const useGlobalForm = (): GlobalFormContextValueType => {
  const context = useContext(GlobalFormContext)
  if (!context) {
    throw new Error("useGlobalForm must be used within a GlobalFormProvider")
  }
  return context
}

export const GlobalFormProvider: FC<GlobalFormProviderProps> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormDataType>({})
  const [selectedEventColor, setSelectedEventColor] =
    useState<string>("#F1F5F9")

  const updateFormData = (data: FormDataType) => {
    setFormData((prevData) => ({ ...prevData, ...data }))
  }
  return (
    <GlobalFormContext.Provider
      value={{
        formData,
        updateFormData,
        selectedEventColor,
        setSelectedEventColor,
      }}
    >
      {children}
    </GlobalFormContext.Provider>
  )
}
