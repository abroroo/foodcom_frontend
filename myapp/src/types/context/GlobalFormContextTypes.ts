export interface FormDataType {
  [key: string]: any
}

export interface GlobalFormContextValueType {
  formData: FormDataType
  selectedEventColor: string
  updateFormData: (data: FormDataType) => void
  setSelectedEventColor: (color: string) => void
}
