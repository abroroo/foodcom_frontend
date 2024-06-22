import React, { ChangeEvent, useState } from "react"

interface SearchInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣0-9\s,\-#.()/]*$/

    if (koreanRegex.test(inputValue)) {
      setErrorMessage("")
    } else {
      setErrorMessage("한글만 입력이 가능합니다.")
    }
    onChange(e)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="my-0 mt-1 h-[40px] w-[100%] flex-grow border-b-[1px] border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
        required
        placeholder={placeholder}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  )
}

export default SearchInput
