import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface EventsCheckboxProps {
  id: string
  value: string
  label: string
  iconSrc: string
  color: string
  selectedEvent: string
  register: any
}

export const EventsCheckbox = ({
  id,
  value,
  label,
  iconSrc,
  color,
  selectedEvent,
  register,
}: EventsCheckboxProps) => {
  const onSelectStyle = {
    color: color,
    border: "solid 1.5px",
    borderColor: color,
    boxShadow: `2px 2px 6px ${color + "60"}`,
    fontWeight: "bold",
    scale: 1.1,
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      className="event_range_wrapper relative m-1 h-20 w-20 rounded-lg border pl-[6px] pt-[4px] text-[12px] text-[#49111c] shadow-lg  md:m-2 md:h-32 md:w-32 md:text-[14px] xl:m-2"
      style={selectedEvent === value ? onSelectStyle : {}}
    >
      <input
        type="radio"
        value={value}
        id={id}
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
          className="pointer-events-none mb-2 h-10 w-10 md:h-[54px] md:w-[54px]"
        />
        <span className="flex">{label}</span>
      </label>
    </motion.div>
  )
}
