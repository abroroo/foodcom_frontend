import React from "react"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialMediaLinks: React.FC = () => {
  return (
    <div className="   w-full flex-col   text-[11px] text-[#49111c] md:w-[90vw]   md:text-[13px]">
      <hr className="mb-3 w-full xl:mb-0" />
      <div className="flex justify-between px-2 pb-2 md:p-4">
        <div className="address-info flex ">
          <a
            href="https://푸드컴.com"
            className="flex flex-col items-start justify-center "
          >
            <p className="">
              COPYRIGHT© 2024 MANCHAN FOOD. <br className="block md:hidden" />
              ALL RIGHTS RESERVED.
            </p>
          </a>
        </div>
        <div className="social-media-icons flex items-center justify-center space-x-4 text-sm">
          <a
            href="https://open.kakao.com/chat/openlink/chat/hw6556"
            className=" text-[#49111c] hover:text-yellow-300"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/pudeukeomeuchuljangsigsa.ibenteu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49111c] hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%91%B8%EB%93%9C%EC%BB%B4&oquery=%ED%91%B8%EB%93%9C%EC%BB%B4&tqi=ikmv1lqVOZossajMI4wssssss%2Fs-258546"
            className="mr-9 text-[#49111c] hover:text-green-700"
          >
            <svg
              fill="currentColor"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Naver</title>
              <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/foodcom_event/?igsh=MWpuZGxzZm1kbjVpbw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49111c] hover:text-pink-700"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaLinks
