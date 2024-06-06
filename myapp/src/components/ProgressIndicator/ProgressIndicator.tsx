import React from "react"
import {
  faBuilding,
  faCalendarDays,
  faChair,
  faFileContract,
  faMapLocationDot,
  faSackDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Dot } from "lucide-react"

type ProgressIndicatorProps = {
  currentStep: number
  themeColor: string
}
export const ProgressIndicator = ({
  currentStep,
  themeColor,
}: ProgressIndicatorProps) => {
  const icons = [
    faUserGroup,
    faSackDollar,
    faBuilding,
    faChair,
    faCalendarDays,
    faMapLocationDot,
    faFileContract,
  ]

  return (
    <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-row md:px-16">
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: currentStep === index ? -20 : 0,
              backgroundColor:
                currentStep === index ? themeColor : "transparent",
              color: currentStep === index ? "#fff" : themeColor,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              bounce: 0.1,
              stiffness: 220,
            }}
            className="rounded-md p-2"
          >
            <FontAwesomeIcon icon={icon} className="h-5 w-5 md:h-9 md:w-9" />
          </motion.div>
          <Dot
            style={{ color: themeColor }}
            size="30px"
            className={`-translate-y-6 transform ${
              currentStep === index ? "block" : "hidden"
            }`}
          />
        </div>
      ))}
    </div>
  )
}

export default ProgressIndicator
