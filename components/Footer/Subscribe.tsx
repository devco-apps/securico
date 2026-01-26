import { IoIosArrowForward } from "react-icons/io"

const Subscribe = () => {
    // start

    return (
        <div className="flex items-center gap-2 w-1/2">
            <p className="text-sm">Subscribe for the latest news. Stay updated on the latest trends.</p>

            <form action="#">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter your email..."
                        className="w-110 h-15.5 bg-gray-600  px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                        aria-label="signup to newsletter"
                        className="absolute top-2.5 right-2.5 px-5 bg-primary"
                    >
                        <span className="flex items-center justify-center h-10.5 text-sm">
                            SUBSCRIBE
                            <IoIosArrowForward className="w-5 h-5" />
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Subscribe