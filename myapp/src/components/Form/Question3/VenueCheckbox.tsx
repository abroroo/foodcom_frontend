import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface VenueCheckboxProps {
  value: string
  label: string
  imgSrc: string
  imgSrcWhite: string
  color: string
  register: any
  selectedVenue: string
}
const VenueCheckbox = ({
  value,
  label,
  imgSrc,
  imgSrcWhite,
  color,
  register,
  selectedVenue,
}: VenueCheckboxProps) => {
  const onSelectStyle = {
    border: "solid 1.5px",
    borderColor: color,
    boxShadow: `2px 2px 6px ${color + "60"}`,
    fontWeight: "bold",
    scale: 1.1,
    background: color,
    color: "#fff",
  }
  return (
    <motion.label
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
      style={selectedVenue === value ? onSelectStyle : {}}
      className="relative m-[6px] flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg border text-[#49111c] shadow-lg hover:bg-indigo-50 md:m-2 md:h-28 md:w-28 xl:m-4"
    >
      <input
        style={{
          display: "none",
          visibility: "hidden",
        }}
        type="radio"
        value={value}
        {...register("event_place", { required: "행사 장소를 선택해주세요" })}
        checked={selectedVenue === value}
      />
      <span className="flex flex-col items-center justify-center text-[14px] md:text-[16px]">
        <Image
          src={selectedVenue === value ? imgSrcWhite : imgSrc}
          alt={`${label} icon`}
          width={40}
          height={40}
          className="mb-[2px]"
        />
        {label}
      </span>
    </motion.label>
  )
}

export default VenueCheckbox
