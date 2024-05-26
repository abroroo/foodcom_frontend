export interface FormDataType {
  [key: string]: any
}

export interface GlobalFormContextValueType {
  formData: FormDataType
  updateFormData: (data: FormDataType) => void
}
