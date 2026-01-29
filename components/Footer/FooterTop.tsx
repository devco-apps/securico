import Image from "next/image";
import Link from "next/link";

import Subscribe from "./Subscribe";


const FooterTop = () => {
    // start

    return (
        <div className="flex items-center justify-between border-b pt-16 pb-20">
            <Link href="/" className="relative">
                <Image
                    width={300}
                    height={40}
                    src="/images/logo/logo-light-1.webp"
                    alt="Logo"
                // className="dark:hidden"
                />
            </Link>

            <Subscribe />
        </div>)
}

export default FooterTop;