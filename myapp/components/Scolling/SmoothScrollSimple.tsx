import React, { useEffect, useRef } from "react"

import useWindowSize from "../../utils/useWindowSize"

interface Props {
  children: React.ReactNode
}

const SmoothScrollSimple: React.FC<Props> = ({ children }) => {
  const windowSize = useWindowSize()
  const scrollingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setBodyHeight()
  }, [windowSize.width])

  const setBodyHeight = () => {
    if (!scrollingContainerRef.current) return

    document.body.style.width = `${
      scrollingContainerRef.current.getBoundingClientRect().width
    }px`
  }

  return (
    <div className="parent-scroll">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  )
}

export default SmoothScrollSimple
