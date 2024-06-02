export interface GlobalStateContextValueType {
  themeColor: string
  setThemeColor: (color: string) => void
  currentStep: number
  setCurrentStep: (step: number) => void
}
