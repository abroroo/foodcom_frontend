import React from "react"

export const ContactInfo: React.FC = () => {
  return (
    <div className="  bg-gray-100 text-sm md:text-base">
      <div className="mx-auto  max-w-4xl p-4">
        <div className="grid grid-cols-1 gap-4 ">
          <div className="rounded bg-white p-4 shadow-md">
            <div className="copyright">
              회사명 : 만찬외식이벤트 | 대표이사 : 한 웅 |
              <br className="block md:hidden" />
              사업자등록번호 : 418-02-26812
              <br />
              주소 : (55014) 전주시 덕진구 진버들7길 21(우아동2가) <br />
              TEL : 1577-4405 <br className="block md:hidden" />
              FAX : 063-247-3938
            </div>
            <div className="">
              <p>
                푸드컴 628-88-02779 / <br className="block md:hidden" />{" "}
                24시간상담-플렛폼 <br />
                010 4280 8418 | 063-231-6556
              </p>
              <p className="mb-1">
                <span className="w-12 ">E-mail:</span>{" "}
                <a href="mailto:hw3030@naver.com" className=" hover:underline">
                  hw3030@naver.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
