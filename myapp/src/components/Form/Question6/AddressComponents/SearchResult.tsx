import React from "react"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface SearchResultProps {
  place: any
  index: number
  selected: boolean
  onClick: (place: any, index: number) => void
  buttonBackground: string
}

const SearchResult: React.FC<SearchResultProps> = ({
  place,
  index,
  selected,
  onClick,
  buttonBackground,
}) => {
  return (
    <motion.li
      initial={{ scale: 1 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.2, type: "spring", bounce: 0.25 }}
      onClick={() => onClick(place, index)}
      className="search-result mb-2 flex w-full cursor-pointer items-center justify-start rounded-lg border-b p-2 shadow-sm hover:bg-slate-50 md:mx-[2px] md:mb-3 md:w-[49%]"
      style={
        selected
          ? { background: buttonBackground, color: "#fff", fontWeight: "bold" }
          : {}
      }
    >
      <FontAwesomeIcon
        style={{ color: buttonBackground }}
        icon={faLocationDot}
        className="mr-1 h-8 w-4"
      />{" "}
      {place.address_name}
    </motion.li>
  )
}

export default SearchResult
