import React from "react"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { motion } from "framer-motion"

export const DisplayMessage = () => {
  const { formData } = useGlobalForm()
  return (
    <motion.div className=" flex w-full items-center justify-center p-2">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          type: "spring",
          bounce: 0.3,
        }}
        className=" flex w-[90%]"
      >
        <input
          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
          value={formData.message}
          placeholder="요청 사항"
        ></input>
      </motion.div>
    </motion.div>
  )
}
