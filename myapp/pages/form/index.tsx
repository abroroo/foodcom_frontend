import React from "react"
import { motion } from "framer-motion"

import FormPage from "../../components/FormPage"
import SmoothScroll from "../../components/Scrolling/SmoothScroll"

interface Props {}

const index = () => {
  return (
    <motion.div className="">
      <FormPage />
    </motion.div>
  )
}

export default index
