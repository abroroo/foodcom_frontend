import React, { useState } from "react"

const toolNames: {
  [key: number]: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  13: string
  14: string
} = {
  1: "사각 테이블",
  2: "원탁테이블",
  3: "스텐딩 테이블",
  4: "의자",
  5: "의자커버",
  6: "자바라 텐트 (3m * 6m)",
  7: "몽골텐트 (5m * 5m)",
  8: "단상",
  9: "기본음향",
  10: "무대",
  11: "진행",
  12: "마스터 밴드",
  13: "플래카드",
  14: "필요없는",
}

type AccessoriesQuestionProps = {
  formData: any
}
export const AccessoriesQuestion = ({ formData }: AccessoriesQuestionProps) => {
  const [selectedAccesories, setSelectedAccesories] = useState<string[]>([])
  const [sliderPeopleNum, setSliderPeopleNum] = useState(0)
  const [customTool, setCustomTool] = useState<string>("")

  const [showOtherToolInput, setShowOtherToolInput] = useState<string>("false")

  let toolNamesArr: string[] = []

  if (0 >= 5) {
    toolNamesArr = formData.tool.map((tool: number) => {
      return toolNames[tool]
    })
    toolNamesArr = toolNamesArr.map((tool: string) => {
      return "  " + tool
    })
  }

  const handleCheckboxAccesories = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target
    setSelectedAccesories((prevFormData: any) => [...prevFormData, value])
  }

  const handleCheckboxAccesoriesOther = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setCustomTool(value)
  }

  const iconPositionForPeopleNum = {
    left: `${(sliderPeopleNum / 1000) * 94}%`,
  }

  return <div>AccessoriesQuestion</div>
}
