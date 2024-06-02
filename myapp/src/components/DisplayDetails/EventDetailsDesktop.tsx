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

export const EventDetailsDesktop = () => {
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
                      {isCurrentQuestion < 1 && (
                          <motion.div
                              initial={{opacity: 0, x: 120}}
                              whileInView={{opacity: 1, x: 0}}
                              transition={{duration: 0.5, type: "spring", bounce: 0.3}}
                              ref={imageFirstParent}
                              className={
                                  eventType === "wedding" ||
                                  eventType === "festival" ||
                                  eventType === "business" ||
                                  eventType === "public" ||
                                  eventType === "birthday" ||
                                  eventType === "fingerFood" ||
                                  eventType === "steak"
                                      ? "flex cursor-pointer flex-col"
                                      : "hidden"
                              }
                          >
                              <p className="mb-3 flex w-[98%] justify-start text-sm">
                                  {" "}
                                  행사사진 구경하기
                              </p>
                              <motion.img
                                  alt="행사사진"
                                  src={
                                      eventType === ""
                                          ? "images/real/festival.jpg"
                                          : imageSources[eventType]
                                  }
                                  style={{width: 450, height: 450}}
                                  className={`mb-[5px] mr-[5px] rounded brightness-110 ${
                                      isMouseWithinHero
                                          ? " scale-[102%] duration-700"
                                          : "scale-100 duration-700"
                                  }`}
                              />
                          </motion.div>
                      )}
                  </motion.div>
                  {eventType !== "wedding" &&
                      eventType !== "festival" &&
                      eventType !== "business" &&
                      eventType !== "public" &&
                      eventType !== "birthday" &&
                      eventType !== "fingerFood" &&
                      eventType !== "steak" &&
                      isCurrentQuestion < 1 && (
                          <motion.div
                              initial={{opacity: 0, x: 120}}
                              whileInView={{opacity: 1, x: 0}}
                              transition={{duration: 0.5, type: "spring", bounce: 0.3}}
                              className="flex flex-col"
                          >
                              <span className="text-gray-700">행사 유형</span>
                              <input
                                  name="event_type"
                                  type="text"
                                  className="mt-1 block w-full appearance-none border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:outline-none focus:ring-0 active:border-[#49111c]"
                                  placeholder=""
                                  onChange={onOtherChange}
                              />
                          </motion.div>
                      )}
              </div>

              {isCurrentQuestion >= 1 && isCurrentQuestion !== 9 && (
                  <div className=" hidden h-full w-full flex-col items-center justify-center xl:flex">
                      <div className="flex items-center justify-between">
                          {isCurrentQuestion >= 1 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      <PartyPopper
                                          style={{color: getColor(0)}}
                                          className="h-5 w-5 md:h-9 md:w-9  "
                                      />
                                      <input
                                          onChange={(e) => {
                                              setEventType(e.target.value)
                                          }}
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={`${
                                              formDataTransfered.event_type === "wedding"
                                                  ? "스몰웨딩, 야외결혼"
                                                  : formDataTransfered.event_type === "business"
                                                      ? "기업 이벤트"
                                                      : formDataTransfered.event_type === "public"
                                                          ? "사회 단체행사"
                                                          : formDataTransfered.event_type === "festival"
                                                              ? "기관, 축제등"
                                                              : formDataTransfered.event_type === "birthday"
                                                                  ? "가족 개인행사"
                                                                  : formDataTransfered.event_type === "fingerFood"
                                                                      ? "핑거푸드"
                                                                      : formDataTransfered.event_type === "steak"
                                                                          ? "스테이크 행사"
                                                                          : desktopOtherType
                                          } `}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                          {isCurrentQuestion >= 2 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faPerson}
                                          className="h-9 w-9"
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.people_count + " 명"}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                      <div className="flex items-center justify-between">
                          {isCurrentQuestion >= 3 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      {" "}
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faSackDollar}
                                          className="h-5 w-5 md:h-8 md:w-8 "
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={
                                              (
                                                  formDataTransfered.meal_cost *
                                                  formDataTransfered.people_count
                                              ).toLocaleString("ko-KR") + " 원"
                                          }
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                          {isCurrentQuestion >= 4 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faBuilding}
                                          className="h-5 w-5 md:h-9 md:w-9 "
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.event_place}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                      <div className="flex w-[70%] items-center justify-start ">
                          {isCurrentQuestion >= 5 && (
                              <motion.div className=" flex w-full items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex w-full"
                                  >
                                      {" "}
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faChair}
                                          className="h-5 w-5 md:h-9 md:w-9 "
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={[toolNamesArr, formDataTransfered.customTool]}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                      <div className="flex w-[100%] items-center justify-start">
                          {isCurrentQuestion >= 6 && (
                              <motion.div className=" flex w-[50%] items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex w-full"
                                  >
                                      {" "}
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faCalendarDays}
                                          className="h-5 w-5 md:h-9 md:w-9 "
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-[100%] appearance-none border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={[
                                              formattedEventDate +
                                              " " +
                                              formDataTransfered.event_time,
                                          ]}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                          {isCurrentQuestion >= 7 && (
                              <motion.div className=" flex w-[50%] items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex justify-between"
                                  >
                                      {" "}
                                      <FontAwesomeIcon
                                          style={{color: getColor(1)}}
                                          icon={faMapLocationDot}
                                          className="h-5 w-5 md:h-9 md:w-9 "
                                      />
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.address}
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                      <div className="flex items-center justify-between">
                          {isCurrentQuestion >= 8 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      {" "}
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.name}
                                          placeholder="이름"
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                          {isCurrentQuestion >= 8 && (
                              <motion.div className=" flex items-center justify-between p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex"
                                  >
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.phone_number}
                                          placeholder="연락처"
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                      <div className="flex w-full items-center justify-start">
                          {isCurrentQuestion >= 8 && (
                              <motion.div className=" flex w-full items-center justify-center p-2">
                                  <motion.div
                                      initial={{x: 50, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      transition={{
                                          duration: 1,
                                          delay: 0,
                                          type: "spring",
                                          bounce: 0.3,
                                      }}
                                      className=" flex w-[90%]"
                                  >
                                      <input
                                          className="my-2 ml-2 mt-1 block h-10 w-full border-b-[1px]  border-slate-200 pb-0 text-[14px] font-semibold text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
                                          value={formDataTransfered.message}
                                          placeholder="요청 사항"
                                      ></input>
                                  </motion.div>
                              </motion.div>
                          )}
                      </div>
                  </div>
              )}
          </div>
      </div>

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
