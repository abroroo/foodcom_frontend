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

  const themeColor60 = hexToRgba(themeColor, 0.9)

  return (
    <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-row md:px-16">
      {icons.map((icon, index) => (
        <>
          {index !== 0 && (
            <motion.hr
              initial={{ x: -20, scaleX: 1 }}
              animate={{
                x: currentStep === index ? 20 : 0,
                scaleX: currentStep === index ? 0 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={
                currentStep === index
                  ? { background: themeColor60 }
                  : { background: "#f9fcfb" }
              }
              className="mx-auto hidden h-2 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-[3px]  md:w-12"
            />
          )}
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
          <motion.hr
            initial={{ x: 0, scaleX: 0 }}
            animate={{
              x: currentStep === index ? 20 : 0,
              scaleX: currentStep === index ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={
              currentStep === index
                ? { background: themeColor60 }
                : { background: "#f9fcfb" }
            }
            className="mx-auto hidden h-2 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-[3px]  md:w-12"
          />
        </>
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
