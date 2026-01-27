
"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { sitemap } from '@data/sitemap';
import Section from '@components/Common/Section';

interface BreadcrumbProps {
    title: string;
    backgroundImageSrc?: string;
}

const Breadcrumb = ({ title, backgroundImageSrc }: BreadcrumbProps) => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const name = sitemap[href]?.name || segment.replace(/-/g, ' ');
        return { name, href };
    });

    const backgroundStyle = backgroundImageSrc
        ? { backgroundImage: `url(${backgroundImageSrc})` }
        : {};

    return (
        <div
            className={`min-h-[25vh] xs:min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] flex flex-col justify-end text-white py-4 bg-cover bg-center bg-gray-400`}
            style={backgroundStyle}
        >
            <div className='bg-black/50 w-full h-full flex flex-col justify-end py-4'>
                <Section>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <div className="flex items-center space-x-2 mt-2">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        {breadcrumbs.map((breadcrumb, index) => (
                            <div key={breadcrumb.href} className="flex items-center space-x-2">
                                <span>/</span>
                                {index < breadcrumbs.length - 1 ? (
                                    <Link href={breadcrumb.href} className="hover:underline">
                                        {breadcrumb.name}
                                    </Link>
                                ) : (
                                    <span className="font-bold">{breadcrumb.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Breadcrumb;

