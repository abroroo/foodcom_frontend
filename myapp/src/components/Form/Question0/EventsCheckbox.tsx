import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface EventsCheckboxProps {
  key: string
  value: string
  label: string
  iconSrc: string
  selectedEvent: string
  register: any
}

export const EventsCheckbox = ({
  key,
  value,
  label,
  iconSrc,
  selectedEvent,
  register,
}: EventsCheckboxProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1, transition: { duration: 0.15 } }}
      whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
      className="event_range_wrapper relative m-1 h-20 w-20 cursor-pointer select-none rounded-lg border pl-[6px] pt-[4px] text-[12px] text-[#49111c] shadow-lg hover:bg-gray-50 hover:text-[#F25287] peer-checked:border-[#F25287] peer-checked:text-[#F25287] md:m-2 md:h-32 md:w-32 md:text-[14px] xl:m-2"
    >
      <input
        type="radio"
        value={value}
        id={value}
        {...register("event_type")}
        checked={selectedEvent === value}
        className="hidden"
      />
      <label
        htmlFor={value}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <Image
          width="54"
          height="54"
          src={iconSrc}
          alt={value}
          className="mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
        />
        <span className="flex">{label}</span>
      </label>
    </motion.div>
  )
}
