import React from "react"
import { useGlobalState } from "@/context/GlobalStateContext"
import { EventsConfig } from "@/data/Event/EventData/EventsConfig"
import { motion } from "framer-motion"

type ShowPhotoOfTheEventProps = {
  imageFirstParent: React.RefObject<HTMLDivElement>
  isMouseWithinHero: boolean
}
export const ShowPhotoOfTheEvent = ({
  imageFirstParent,
  isMouseWithinHero,
}: ShowPhotoOfTheEventProps) => {
  const { event, themeColor } = useGlobalState()
  const selectedEvent = event
  const selectedEventConfig = EventsConfig.find(
    (event) => event.value === selectedEvent
  )
  const imageSrc = selectedEventConfig
    ? selectedEventConfig.imageSrc
    : "images/real/festival.jpg"

  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      ref={imageFirstParent}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className={selectedEvent ? "flex cursor-pointer flex-col" : "hidden"}
    >
      <p className="mb-3 flex w-[98%] justify-start text-sm">
        {" "}
        행사사진 구경하기
      </p>
      <motion.img
        alt="행사사진"
        src={imageSrc}
        style={{ width: 450, height: 450 }}
        className={`mb-[5px] mr-[5px] rounded brightness-110 ${
          isMouseWithinHero
            ? " scale-[102%] duration-700"
            : "scale-100 duration-700"
        }`}
      />
    </motion.div>
  )
}
