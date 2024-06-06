import React, { useRef, useState } from "react"
import { useRouter } from "next/router"
import { ShowPhotoOfTheEvent } from "@/components/DisplayDetails/ShowPhotoOfTheEvent"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

type CursorFollowerProps = {
  currentStep: number
}
export const ShowPhotoWithCursorFollower = ({
  currentStep,
}: CursorFollowerProps) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const imageFirstParent = useRef<HTMLDivElement>(null)
  const [isMouseWithinHero, setIsMouseWithinHero] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)
  const router = useRouter()

  const handleExploreClick = async (): Promise<void> => {
    router.push("/work")
  }

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const imageElement = imageWrapperRef.current
    const cursorElement = cursorRef.current

    if (imageElement && cursorElement) {
      const imageRect = imageElement.getBoundingClientRect()
      const x = e.clientX - imageRect.left
      const y = e.clientY - imageRect.top

      // Set the cursor's position based on the mouse position within the image with a slight delay
      setCursorX(x)
      setCursorY(y)

      // Apply blur and darkness to the image
      if (imageFirstParent.current) {
      }
    }
  }

  const handleMouseEnter = (): void => {
    setIsMouseWithinHero(true)
  }

  const handleMouseLeave = (): void => {
    setIsMouseWithinHero(false)
    // Remove blur and darkness when the cursor leaves the image
    if (imageFirstParent.current) {
    }
  }

  return (
    <div className="flex flex-row items-center justify-center ">
      <motion.div
        ref={imageWrapperRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          backgroundSize: 110,
          transition: { duration: 0.2 },
        }}
        className="relative flex-col"
      >
        // mpuse cursor follower for explore button
        {isMouseWithinHero && (
          <motion.div
            onClick={handleExploreClick}
            id="cursor"
            ref={cursorRef}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: cursorX - 45,
              y: cursorY - 55,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              x: cursorX - 45,
              y: cursorY - 55,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "90px",
              height: "90px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              zIndex: 100,
            }}
            className=" absolute flex cursor-pointer items-center justify-center text-[14px] font-bold  leading-relaxed"
          >
            <FontAwesomeIcon
              className="h-5 w-5 text-[#49111c]"
              icon={faArrowRightToBracket}
            />{" "}
          </motion.div>
        )}
        // event photo for each event type
        {currentStep < 1 && (
          <ShowPhotoOfTheEvent
            isMouseWithinHero={isMouseWithinHero}
            imageFirstParent={imageFirstParent}
          />
        )}
      </motion.div>
    </div>
  )
}
