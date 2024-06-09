import React from "react"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export const DisplayBudget = () => {
  const { formData, selectedEventColor } = useGlobalForm()
  const totalCost = formData.meal_cost * formData.people_count

  return (
    <motion.div className=" flex items-center justify-between p-2">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          type: "spring",
          bounce: 0.3,
        }}
        className=" flex"
      >
        {" "}
        <FontAwesomeIcon
          style={{ color: selectedEventColor }}
          icon={faSackDollar}
          className="h-5 w-5 md:h-8 md:w-8 "
        />
        <input
          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
          value={totalCost.toLocaleString("ko-KR") + " 원"}
        ></input>
      </motion.div>
    </motion.div>
  )
}
