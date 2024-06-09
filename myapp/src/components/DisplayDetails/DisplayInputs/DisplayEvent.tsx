import React from "react"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { EventsConfig } from "@/data/Event/EventData/EventsConfig"
import { motion } from "framer-motion"
import { PartyPopper } from "lucide-react"

const DisplayEvent = () => {
  const { formData, selectedEventColor } = useGlobalForm()
  const eventLabel = EventsConfig.filter(
    (event) => formData.event_type === event.value
  )[0].label

  const event =
    eventLabel === "도시락.기타 행사" ? formData.event_other_value : eventLabel

  return (
    <motion.div className=" flex items-center justify-between p-2">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          type: "spring",
          bounce: 0.3,
        }}
        className=" flex"
      >
        <PartyPopper
          style={{ color: selectedEventColor }}
          className="h-5 w-5 md:h-9 md:w-9  "
        />
        <input
          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
          value={event}
        ></input>
      </motion.div>
    </motion.div>
  )
}

export default DisplayEvent
