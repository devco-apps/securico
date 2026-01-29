import Image from "next/image";
import Link from "next/link";

import Subscribe from "./Subscribe";


const FooterTop = () => {
    // start

    return (
        <div className="flex flex-col md:flex-row items-start sm:items-center justify-between border-b pt-12 pb-12 md:pt-16 md:pb-20 gap-8 md:gap-4">
            <Link href="/" className="relative inline-block">
                <Image
                    width={300}
                    height={40}
                    src="/images/logo/logo-light-1.webp"
                    alt="Logo"
                    className="w-[220px] md:w-[300px] h-auto"
                // className="dark:hidden"
                />
            </Link>

            <Subscribe />
        </div>)
}

export default FooterTop;