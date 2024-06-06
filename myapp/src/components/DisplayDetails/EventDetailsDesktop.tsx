import React from "react"
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faBuilding,
    faCalendarDays,
    faChair, faFileContract, faMapLocationDot,
    faPerson,
    faSackDollar, faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import {Dot, PartyPopper} from "lucide-react";
import {useGlobalState} from "@/context/GlobalStateContext";
import DisplayEvent from "@/components/DisplayDetails/DisplayInputs/DisplayEvent";
import DisplayPeople from "@/components/DisplayDetails/DisplayInputs/DispayPeople";
import {DisplayBudget} from "@/components/DisplayDetails/DisplayInputs/DisplayBudget";
import {DisplayVenue} from "@/components/DisplayDetails/DisplayInputs/DisplayVenue";
import {DisplayTools} from "@/components/DisplayDetails/DisplayInputs/DisplayTools";
import {DisplayDate} from "@/components/DisplayDetails/DisplayInputs/DisplayDate";
import {DisplayAddress} from "@/components/DisplayDetails/DisplayInputs/DisplayAddress";
import {DsiplayName} from "@/components/DisplayDetails/DisplayInputs/DisplayName";
import {DisplayPhone} from "@/components/DisplayDetails/DisplayInputs/DisplayPhone";
import {DisplayMessage} from "@/components/DisplayDetails/DisplayInputs/DisplayMessage";
import {DisplaySelectedValues} from "@/components/DisplayDetails/DisplaySelectedValues";
import {ShowPhotoOfTheEvent} from "@/components/DisplayDetails/ShowPhotoOfTheEvent";

export const EventDetailsDesktop = () => {
    const {themeColor, currentStep, setCurrentStep} = useGlobalState();

  return (
      <div
          id="rightDiv"
          className="z-[200] hidden h-screen w-[40%]  xl:flex   "
      >
          <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden ">
              {/* <ScrollingTable /> */}

              <div className="flex flex-row items-center justify-center ">
                  <motion.div
                      ref={imageWrapperRef}
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      whileHover={{
                          backgroundSize: 110,
                          transition: {duration: 0.2},
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
                              animate={
                                  isModalOpen
                                      ? {scale: 400, opacity: 1}
                                      : {
                                          scale: 1,
                                          opacity: 1,
                                          x: cursorX - 45,
                                          y: cursorY - 55,
                                      }
                              }
                              exit={{opacity: 0, scale: 0.5}}
                              transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
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
                        <ShowPhotoOfTheEvent />
                      )}
                  </motion.div>
              </div>


              //display submitted form values
              {currentStep >= 1 && currentStep !== 9 && (
                  <DisplaySelectedValues  currentStep={currentStep}/>
              )}
          </div>
      </div>


      // footer icons
    {isCurrentQuestion < 9 && (
            <div className="absolute hidden  h-screen w-screen bg-white md:block ">
                <motion.div
                    initial={{y: 50, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        type: "spring",
                        bounce: 0.3,
                    }}
                    className=" fixed bottom-0 z-[100] h-12 w-full border border-slate-100 drop-shadow-2xl md:h-[4.5rem] "
                >
                    <div className="flex h-full w-full flex-row items-center justify-between px-2 md:flex-row md:px-16">
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 0 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 0 ? getColor(0) : "transparent",
                                    color: isCurrentQuestion === 0 ? "#fff" : getColor(0),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <PartyPopper className="h-5 w-5 md:h-9 md:w-9  "/>
                            </motion.div>
                            <Dot
                                style={{color: getColor(0)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 0 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(1)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700   md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 1 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 1 ? getColor(1) : "transparent",
                                    color: isCurrentQuestion === 1 ? "#fff" : getColor(1),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faUserGroup}
                                    className="h-5 w-5 md:h-8 md:w-8 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(1)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 1 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(2)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 2 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 2 ? getColor(2) : "transparent",
                                    color: isCurrentQuestion === 2 ? "#fff" : getColor(2),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faSackDollar}
                                    className="h-5 w-5 md:h-8 md:w-8 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(2)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 2 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(3)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 3 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 3 ? getColor(3) : "transparent",
                                    color: isCurrentQuestion === 3 ? "#fff" : getColor(3),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    className="h-5 w-5 md:h-9 md:w-9 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(3)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 3 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(4)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 4 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 4 ? getColor(4) : "transparent",
                                    color: isCurrentQuestion === 4 ? "#fff" : getColor(4),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faChair}
                                    className="h-5 w-5 md:h-9 md:w-9 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(4)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 4 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(5)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 5 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 5 ? getColor(5) : "transparent",
                                    color: isCurrentQuestion === 5 ? "#fff" : getColor(5),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="h-5 w-5 md:h-9 md:w-9 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(5)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 5 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(6)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 6 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 6 ? getColor(6) : "transparent",
                                    color: isCurrentQuestion === 6 ? "#fff" : getColor(6),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faMapLocationDot}
                                    className="h-5 w-5 md:h-9 md:w-9 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(6)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 6 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                        <hr
                            style={{background: getColor(7)}}
                            className="mx-auto hidden h-5 w-1 rounded border-0 bg-gray-200 dark:bg-gray-700 md:block md:h-1  md:w-28"
                        ></hr>
                        <div className="flex flex-col items-center ">
                            <motion.div
                                initial={{y: 0}}
                                animate={{
                                    y: isCurrentQuestion === 7 ? -20 : 0,
                                    backgroundColor:
                                        isCurrentQuestion === 7 ? getColor(7) : "transparent",
                                    color: isCurrentQuestion === 7 ? "#fff" : getColor(7),
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.1,
                                    stiffness: 220,
                                }}
                                className="rounded-md p-2"
                            >
                                <FontAwesomeIcon
                                    icon={faFileContract}
                                    className="h-5 w-5 md:h-9 md:w-9 "
                                />
                            </motion.div>
                            <Dot
                                style={{color: getColor(7)}}
                                size="30px"
                                className={`-translate-y-6 transform ${
                                    isCurrentQuestion === 7 ? "block" : "hidden"
                                } `}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

</div>
)
}
