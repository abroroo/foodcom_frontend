import React, { useState } from "react"

export const HostContactQuestion = () => {
  const [customerName, setCustomerName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [customerMessage, setCustomerMessage] = useState("")

  const [phoneNumberError, setPhoneNumberError] = useState("")

  const validatePhoneNumber = (value: string) => {
    const phoneNumberRegex = /\d{11}$/

    if (phoneNumberRegex.test(value)) {
      setPhoneNumberError("완벽해요!")
      return value
    } else if (value === "") {
      setPhoneNumberError("")
    } else {
      setPhoneNumberError("11개의 숫자만 입력하십시오")
      return null //formData.phone_number // Return the previous value if the new value doesn't pass the checks
    }
  }

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target
    const validatedPhoneNumber = validatePhoneNumber(value)
    // setFormData((prevFormData: any) => ({
    //   ...prevFormData,
    //   [name]: validatedPhoneNumber,
    // }))
    setPhoneNumber("") //validatedPhoneNumber
  }

  return <div>AccessoriesQuestion</div>
}
