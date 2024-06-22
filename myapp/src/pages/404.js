import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[#fff]">
            <div className="flex flex-col items-center font-NexonGothicBold">
                <h1 className="text-[120px] font-extrabold text-[#49111c] ">404</h1>
                <p className="mb-6 text-xl font-medium text-[#2e1217]/80">
                    페이지를 찾을 수 없음
                </p>
                <Link
                    href="/form"
                    className="rounded-md bg-[#49111c]/90 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-[#49111c]"
                >
                    처음으로
                </Link>
            </div>
        </div>
    )
}