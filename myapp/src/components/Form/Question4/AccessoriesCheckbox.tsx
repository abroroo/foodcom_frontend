import React from "react"
import { motion } from "framer-motion"

interface AccessoriesCheckboxProps {
  value: string
  label: string
  color: string
  register: any
  selectedTool: string[]
}

export const AccessoriesCheckbox = ({
  value,
  label,
  color,
  register,
  selectedTool,
}: AccessoriesCheckboxProps) => {
  return (
    <motion.label
      whileTap={{
        scale: [1.15, 1.25, 1],
        transition: {
          duration: 0.2,
        },
      }}
      whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.06,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="relative m-1 flex h-16 w-[85px] cursor-pointer  items-center justify-start rounded-lg  border p-1 text-[#49111c] shadow-md hover:bg-indigo-50 md:m-2 md:h-20 md:w-28 md:justify-center xl:m-2 "
    >
      <input
        style={{ accentColor: color }}
        type="checkbox"
        value={value}
        {...register("tool")}
      />

      <span className="pl-1 text-[12px] md:text-[15px]">{label}</span>
    </motion.label>
  )
}
