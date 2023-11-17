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
    ease: windowSize.width > 500 ? 0.08 : 1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    setBodyHeight()
  }, [windowSize.height])

  const setBodyHeight = () => {
    if (!scrollingContainerRef.current) return

    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`
  }

  const handleClick = (event: any) => {
    event.preventDefault()
    const target = event.currentTarget
    const targetId = target.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (!targetElement) return

    const targetPosition = targetElement.offsetTop
    window.scroll({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  let scrollTimeout: number | undefined

  const handleScroll = () => {
    if (!scrollingContainerRef.current) return

    const sections = scrollingContainerRef.current.querySelectorAll("section")
    const windowHeight = window.innerHeight

    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = window.setTimeout(() => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        const sectionCenter = (sectionTop + sectionBottom) / 2
        const scrollPosition = window.scrollY + windowHeight / 2

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          window.scrollTo({
            top: sectionCenter - windowHeight / 2,
            behavior: "smooth",
          })
        }
      })
    }, 700)
  }

  const findClosestSection = (
    sections: NodeListOf<HTMLElement>,
    windowHeight: number
  ) => {
    let closestSection = sections[0]
    let closestDistance = Infinity

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight
      const sectionCenter = (sectionTop + sectionBottom) / 2
      const scrollPosition = window.scrollY + windowHeight / 2
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
    const links = scrollingContainerRef.current.querySelectorAll(".heroLink")

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
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    if (!scrollingContainerRef.current) return

    if (!isScrolling) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`
    }

    requestAnimationFrame(() => smoothScrollingHandler())
  }

  return (
    <div className="parent-scroll ">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  )
}

export default SmoothScroll

// import React, { useEffect, useRef } from "react";

// import useWindowSize from "./useWindowSize";

// interface Data {
//   ease: number;
//   current: number;
//   previous: number;
//   rounded: number;
// }

// interface Props {
//   children: React.ReactNode;
// }

// const SmoothScroll: React.FC<Props> = ({ children }) => {
//   const windowSize = useWindowSize();
//   const scrollingContainerRef = useRef<HTMLDivElement>(null);

//   const data: Data = {
//     ease: 0.06,
//     current: 0,
//     previous: 0,
//     rounded: 0,
//   };

//   useEffect(() => {
//     setBodyHeight();
//   }, [windowSize.height]);

//   const setBodyHeight = () => {
//     if (!scrollingContainerRef.current) return;

//     document.body.style.height = `${
//       scrollingContainerRef.current.getBoundingClientRect().height
//     }px`;
//   };

//   useEffect(() => {
//     requestAnimationFrame(() => smoothScrollingHandler());
//   }, []);

//   const smoothScrollingHandler = () => {
//     data.current = window.scrollY;
//     // console.log("This is data.current: " + data.current)
//     data.previous += (data.current - data.previous) * data.ease;
//     data.rounded = Math.round(data.previous * 100) / 100;

//     if (!scrollingContainerRef.current) return;

//     scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

//     requestAnimationFrame(() => smoothScrollingHandler());
//   };

//   return (
//     <div className="parent-scroll">
//       <div ref={scrollingContainerRef}>{children}</div>
//     </div>
//   );
// };

// export default SmoothScroll;
