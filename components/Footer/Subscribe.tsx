import { IoIosArrowForward } from "react-icons/io"

const Subscribe = () => {
    // start

    return (
        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8 w-full md:w-3/4 xl:w-1/2">
            <p className="text-sm text-center xl:text-left">Subscribe for the latest news. Stay updated on the latest trends.</p>

            <form action="#" className="w-full">
                <div className="relative w-full max-w-[440px] mx-auto xl:mx-0">
                    <input
                        type="text"
                        placeholder="Enter your email..."
                        className="w-full h-15.5 bg-gray-600 px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary rounded-sm"
                    />

                    <button
                        aria-label="signup to newsletter"
                        className="absolute top-2.5 right-2.5 px-5 bg-primary rounded-sm text-white hover:bg-opacity-90 transition-all duration-300"
                    >
                        <span className="flex items-center justify-center h-10.5 text-sm font-medium">
                            SUBSCRIBE
                            <IoIosArrowForward className="w-5 h-5 ml-1" />
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Subscribe