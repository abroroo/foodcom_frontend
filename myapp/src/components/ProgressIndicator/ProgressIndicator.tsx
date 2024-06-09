import React from "react"
import {
  faBuilding,
  faCalendarDays,
  faChair,
  faChampagneGlasses,
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
    faChampagneGlasses,
    faUserGroup,
    faSackDollar,
    faBuilding,
    faChair,
    faCalendarDays,
    faMapLocationDot,
    faFileContract,
  ]

  const themeColor60 = hexToRgba(themeColor, 0.8)

  return (
    <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-row md:px-16">
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: currentStep === index ? -20 : 0,
                backgroundColor:
                  currentStep >= index ? themeColor : "transparent",
                color: currentStep >= index ? "#fff" : "#F0F0F0",
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0.1,
                stiffness: 220,
              }}
              className="rounded-md p-2"
            >
              <FontAwesomeIcon icon={icon} className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
            <Dot
              style={{ color: currentStep >= index ? themeColor : "#F0F0F0" }}
              size="30px"
              className={`-translate-y-6 transform ${
                currentStep === index ? "block" : "hidden"
              }`}
            />
          </div>
          {index < icons.length - 1 && (
            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: currentStep > index ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{
                background: currentStep > index ? themeColor60 : "#F0F0F0",
              }}
              className="mx-auto hidden h-2 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-[3px] md:w-24"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressIndicator

const hexToRgba = (hex: any, alpha: any) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
