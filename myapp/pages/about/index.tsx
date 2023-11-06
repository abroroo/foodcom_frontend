import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const index: React.FC = () => {





  return (
    <motion.div 
   
    className="flex flex-col items-center justify-center h-screen font-outfit bg-[#fff] text-[#49111c] overflow-scroll  ">
    

      <main className="container mx-auto h-full mt-16 md:mt-56  px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
          <div className='w-full h-full'>
            <div className='block xl:fixed '>
            <Image
            width={600}
            height={700}
              src="/images/about_pic.jpeg"
              alt="About Us"
              className="rounded-lg w-full "
            />
            </div>
          </div>
          <div className="flex flex-col justify-center  text-[15px] overflow-y-scroll ">
          <motion.h1 
     
          className="text-2xl font-bold font-cormorant mb-8">Food Communication Inc</motion.h1>
          
             <motion.h4 
             initial={{opacity: 0, x: -50, }}
             animate={{opacity: 1, x: 0, }}
             transition={{delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
             viewport={{once: true}}
             className='font-semibold leading-relaxed'>푸드컴에 오신 것을 환영합니다 - 1995년부터 기억에 남는 순간을 만들어 왔습니다 </motion.h4>
             <motion.p 
             initial={{opacity: 0, x: -50, }}
             animate={{opacity: 1, x: 0, }}
             transition={{delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
             viewport={{once: true}}
             className="text-[#49111c] leading-relaxed mb-6">
            

             30년 이상 동안 푸드컴은 기억에 남을 만한 순간의 중심 역할을 해왔습니다. 1995년에 창립된 이후, 우리는 훌륭한 음식 서비스와 이벤트 관리에 대한 열정으로 산업 내에서 신뢰할 수 있는 이름이 되었습니다.
 </motion.p>


 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>요리의 훌륭함: 맛과 혁신의 만남</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 요리의 훌륭함에 대한 우리의 헌신은 우리가 하는 일의 핵심입니다. 다양한 메뉴로 한국 요리의 풍부한 전통과 서양의 대담한 맛을 조화롭게 어우러뜨리며, 특별한 날과 잊지 못할 요리로 기억에 남는 요리를 만들어내는 데 자부심을 가집니다.
 </motion.p>

 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>맛있음 이상의 것: 이벤트를 생동감 있게</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 우리는 훌륭한 이벤트에는 훌륭한 세부 사항 주의가 필요하다고 믿습니다. 그래서 우리는 음식 서비스를 뛰어넘어갑니다. 매혹적인 장식물부터 견고한 테이블과 의자, 우아한 텐트에서 분위기를 조성하는 음악까지, 우리는 당신의 이벤트의 모든 측면을 다루고 있습니다.
 </motion.p>

 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>왜 푸드컴을 선택해야 하는가: 당신의 축제 파트너</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  animate={{opacity: 1, x: 0, }}
  transition={{delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 푸드컴을 선택하면 단순히 행사가 아닌 소중한 기억이 되도록 헌신하는 파트너를 선택하는 것입니다. 우리는 물류를 처리하므로 여러 해 동안 얘기될 순간을 만드는 데 집중할 수 있습니다.
 <br />
 우리와 함께 부드콤에서 모든 이벤트는 마법을 만들기 위한 기회입니다. 우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 한 번에 잊지 못할 경험을 만들어 드립니다.</motion.p>



 <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">연락처</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">카카오톡 계정</h3>
            <p>
            모든 문의나 도움이 필요한 경우, 카카오톡을 통해 저희에게 연락하실 수 있습니다
            </p>
            <a  
              href="https://qr.kakao.com/chat/hw6556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              카카오톡 계정
            </a>
          </div>
          <div className="p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">연락 정보</h3>
            <p>
            만약 다른 커뮤니케이션 수단을 선호하신다면, 전화나 이메일로 저희에게 연락하실 수 있습니다
            </p>
            <div className="mt-2">
              <p className="mb-2">
                <strong>Phone:</strong> 010 3655 6556
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-500 hover:underline"
                >
                  hw3030@naver.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            
           </div>
        </div>

        <footer className=" py-2 text-center mt-16 ">
      <p className="text-sm mb-5">&copy; {new Date().getFullYear()} 만찬. All rights reserved.</p>
      </footer>
      </main>

      
    </motion.div>
  );
};

export default index;

