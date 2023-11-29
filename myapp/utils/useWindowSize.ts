import { useEffect, useState } from "react"

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = (): WindowSize => {
  const getSize = (): WindowSize => {
    if (typeof window === "undefined") return { width: 0, height: 0 }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize())

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize(getSize())
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
