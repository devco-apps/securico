import Link from "next/link";

type Service = {
    id: string;
    title: string;
    description: string;
    href: string;
};

export default function Card({ service }: { service: Service }) {
    return (
        <div className="group relative bg-white border border-neutral-200 p-8 transition-all duration-300 hover:border-emerald-600 hover:shadow-xl">

            {/* Vertical Service Number */}
            <span className="absolute right-6 top-6 text-6xl font-bold text-neutral-100 select-none">
                {service.id}
            </span>

            {/* Icon Placeholder */}
            <div className="mb-6 h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                {/* Replace with SVG icon */}
                ●
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-neutral-900">
                {service.title}
            </h3>
            <p className="mt-3 text-neutral-600">
                {service.description}
            </p>

            {/* Hover CTA */}
            <Link
                href={service.href}
                className="absolute left-8 bottom-6 flex items-center gap-2 opacity-0 translate-y-3
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300
                   bg-neutral-900 text-white text-sm px-4 py-2"
            >
                Explore Service
                <span>↗</span>
            </Link>
        </div>
    );
}