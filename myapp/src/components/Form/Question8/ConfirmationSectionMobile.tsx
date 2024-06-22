import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCustomerAPI } from "@/api/useCustomerAPI"
import { PreviousButton } from "@/components/Button/PreviousButton"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

import { useEventDetails } from "./useEventDetails"

type ConfirmationSectionDesktopProps = {
  handlePrevious: () => void
}

const EventDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start justify-between">
    <p>{label}: </p>
    <span className="pl-1 font-light">{value}</span>
  </div>
)
export const ConfirmationSectionMobile: React.FC<
  ConfirmationSectionDesktopProps
> = ({ handlePrevious }) => {
  const { formData, selectedEventColor } = useGlobalForm()
  const router = useRouter()
  const { createNewCustomer, saveFormData, loading, error } = useCustomerAPI()
  const { eventLabel, toolLabels, venue, formattedDate } = useEventDetails()

  const handleFormSubmit = async () => {
    try {
      const ticket_number = await createNewCustomer()
      await saveFormData(ticket_number, formData)
      router.push("/thank-you")
    } catch (error) {
      console.error("Form submission failed:", error)
    }
  }

  return (
    <>
      <div className="hidden xl:block">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h1 className="flex items-center justify-center text-[1rem] font-semibold md:text-[1.2rem]">
            이벤트 세부 정보를 확인하세요
          </h1>
        </motion.div>
        <Image
          src="/images/female-chef.jpg"
          alt="salt-bae"
          width={400}
          height={600}
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center xl:hidden">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="m-1 mb-5 text-[1rem] font-bold md:m-5"
        >
          귀 행사를 위해 최고의 파트너가 되겠습니다
        </motion.p>
        <h3 className="mb-2 py-1 text-sm text-slate-400 md:py-4">
          요청하신 세부정보를 확인하세요
        </h3>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
          className="flex w-full flex-col justify-center px-2 py-5 text-[0.8rem] font-bold md:w-[50%] md:px-4"
        >
          <EventDetail label="이벤트 유형" value={eventLabel} />
          <EventDetail label="출석인원" value={`${formData.people_count} 명`} />
          <EventDetail
            label="식비"
            value={`${formData.meal_cost} 원 || ${
              formData.meal_cost * formData.people_count
            } 원`}
          />
          <EventDetail
            label="이벤트 날짜"
            value={`${formattedDate} ${formData.event_time}`}
          />
          <EventDetail label="장소" value={venue} />
          <EventDetail
            label="필요한 품목"
            value={`${toolLabels} ${formData.customTool ?? ""}`}
          />
          <EventDetail label="주소" value={formData.address} />
          <EventDetail label="이름" value={formData.name} />
          <EventDetail label="전화번호" value={formData.phone_number} />
          <EventDetail label="추가 참고 사항" value={formData.message} />
        </motion.div>
      </div>

      <div className="flex w-full items-center justify-center">
        <PreviousButton
          handlePrevious={handlePrevious}
          color={selectedEventColor}
        />
        <motion.button
          style={{ background: selectedEventColor, color: "#fff" }}
          onClick={handleFormSubmit}
          type="submit"
          className="relative mt-5 h-[41px] w-[40%] max-w-sm rounded-lg border bg-[#900C3F] py-2 text-[14px] font-semibold tracking-wider text-[#49111c] focus:outline-none md:w-[20%] md:text-[16px]"
          draggable="false"
        >
          견적예약하기 <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
        </motion.button>
      </div>

      {loading && <p>로딩 중...</p>}
      {error && <p>오류 발생: {error.message}</p>}
    </>
  )
}
