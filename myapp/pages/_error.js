// pages/_error.js

import Link from 'next/link'

const ErrorPage = ({ statusCode }) => {
    return (
        <div>
            <div className="flex h-screen flex-col items-center justify-center bg-[#fff]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[120px] font-extrabold text-black">Error: {statusCode}</h1>

                    <Link
                        href="/form"
                        className="rounded-md bg-[#49111c]/90 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-[#49111c]"
                    >
                        처음으로
                    </Link>
                </div>
            </div>

        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
