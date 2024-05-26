import React from "react"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface NextButtonProps {
  color: string
}
export const NextButton = ({ color }: NextButtonProps) => {
  return (
    <>
      <motion.button
        style={{
          background: color,
          color: "#fff",
          border: "1px solid #fff",
        }}
        // disabled={
        //     selectedEvent !== "" || eventTypeOther !== "" ? false : true
        // }
        type="submit"
        className="text-md focus:bg-blue mt-5 h-[41px] w-[40%] max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider text-[#49111c] focus:outline-none md:w-[15%] md:text-[16px]"
        draggable="false"
      >
        다음 <FontAwesomeIcon icon={faCaretRight} />
      </motion.button>
    </>
  )
}
