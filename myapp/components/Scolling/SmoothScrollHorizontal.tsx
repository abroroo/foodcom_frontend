import React, { useEffect, useRef, useState } from "react"

import useWindowSize from "../../utils/useWindowSize"

interface Data {
  ease: number
  current: number
  previous: number
  rounded: number
}

interface Props {
  children: React.ReactNode
}

const SmoothScroll: React.FC<Props> = ({ children }) => {
  const windowSize = useWindowSize()
  const scrollingContainerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  const data: Data = {
    ease: windowSize.width > 500 ? 0.01 : 1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  const setBodyWidth = () => {
    if (!scrollingContainerRef.current) return

    document.body.style.width = `
  ${scrollingContainerRef.current.getBoundingClientRect().width}
  px`
  }

  useEffect(() => {
    setBodyWidth()
  }, [windowSize.width])

  const handleClick = (event: any) => {
    event.preventDefault()
    const target = event.currentTarget
    const targetId = target.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (!targetElement) return

    const targetPosition = targetElement.offsetTop
    window.scroll({
      left: targetPosition, // Modify the "top" property to "left"
      behavior: "smooth",
    })
  }

  let scrollTimeout: number | undefined

  const handleScroll = () => {
    if (!scrollingContainerRef.current) return

    const sections = scrollingContainerRef.current.querySelectorAll("section")
    const windowWidth = window.innerWidth

    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = window.setTimeout(() => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        const sectionCenter = (sectionTop + sectionBottom) / 2
        const scrollPosition = window.scrollX + windowWidth / 2

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          window.scrollTo({
            left: sectionCenter - windowWidth / 2, // Modify the "top" property to "left"
            behavior: "smooth",
          })
        }
      })
    }, 700)
  }

  const findClosestSection = (
    sections: NodeListOf<HTMLElement>,
    windowWidth: number
  ) => {
    let closestSection = sections[0]
    let closestDistance = Infinity

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight
      const sectionCenter = (sectionTop + sectionBottom) / 2
      const scrollPosition = window.scrollX + windowWidth / 2
      const distance = Math.abs(sectionCenter - scrollPosition)

      if (distance < closestDistance) {
        closestSection = section
        closestDistance = distance
      }
    })

    return closestSection
  }

  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!scrollingContainerRef.current) return
    const links =
      scrollingContainerRef.current.querySelectorAll(".inner-corousel")

    links.forEach((link) => link.addEventListener("click", handleClick))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
    }
  }, [scrollingContainerRef.current])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
  }, [])

  const smoothScrollingHandler = () => {
    data.current = window.scrollX
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    if (!scrollingContainerRef.current) return

    if (!isScrolling) {
      scrollingContainerRef.current.style.transform = `translateX(-${data.previous}px)` // Modify the "translateY" to "translateX"
    }

    requestAnimationFrame(() => smoothScrollingHandler())
  }

  return (
    <div className="parent-scroll">
      <div ref={scrollingContainerRef} className="horizontal-scroll">
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
