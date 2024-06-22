import React from "react"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface PreviousButtonProps {
  handlePrevious: () => void
  color: string
}

export const PreviousButton = ({
  handlePrevious,
  color,
}: PreviousButtonProps) => {
  return (
    <>
      <motion.button
        type="button"
        style={{ color: color }}
        className="text-md  mr-7 mt-5 flex  items-center justify-center py-2  text-[15px] font-semibold tracking-wider  underline decoration-solid underline-offset-2 md:w-[10%] md:text-[15px]"
        onClick={handlePrevious}
      >
        <>
          <FontAwesomeIcon icon={faCaretLeft} className="mr-1 h-5 w-2 " /> 뒤로
        </>
      </motion.button>
    </>
  )
}
