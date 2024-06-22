import React from "react"
import Image from "next/image"
import { IContactConfig } from "@/data/Contact/ContactConfig"
import { motion } from "framer-motion"

type ContactFormProps = {
  register: any
  contactConfig: IContactConfig
}
export const ContactForm = ({ register, contactConfig }: ContactFormProps) => {
  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.02,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="mt-10 flex w-full items-center justify-center md:w-[70%]"
      >
        <div className="mr-3">
          <Image
            src={contactConfig.name.icon}
            width={25}
            height={25}
            alt={contactConfig.name.label}
          />
        </div>
        <input
          required={true}
          className="block h-10 w-full  border-b-[1px]  border-slate-200  pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px]"
          placeholder={contactConfig.name.placeholder}
          type="text"
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
        />
      </motion.div>

      {/* Phone number */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className=" mt-10 w-full  md:w-[70%]"
      >
        <div className="flex items-center justify-center">
          <div className="mr-3">
            <Image
              src={contactConfig.phone.icon}
              width={25}
              height={25}
              alt={contactConfig.phone.label}
            />
          </div>

          <input
            type="tel"
            required={true}
            className={`phone_number_input block h-10 w-full border-b-[1px] border-slate-200 pr-3 text-[13px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px]`}
            placeholder={contactConfig.phone.placeholder}
            {...register("phone_number", {
              required: true,
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "올바른 한국 전화번호를 입력하세요. (예: 01012345678)",
              },
            })}
          />
        </div>
      </motion.div>

      <motion.div className="my-2 mt-10 flex w-full items-start justify-center  md:w-[70%]">
        <div className="mr-3">
          <Image
            src={contactConfig.note.icon}
            width={25}
            height={25}
            alt={contactConfig.note.label}
          />
        </div>
        <textarea
          rows={3}
          cols={30}
          className=" w-full resize-y border-b-[1px]  border-slate-200 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[15px] "
          placeholder={contactConfig.note.placeholder}
          {...register("message")}
        ></textarea>
      </motion.div>
    </>
  )
}
