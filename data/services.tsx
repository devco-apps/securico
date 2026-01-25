// services.ts

import { ReactNode } from 'react';

import {
    MdSecurity,
    MdSettingsRemote,
    MdLocalShipping,
    MdFlashOn,
    MdAssignmentTurnedIn
} from 'react-icons/md';

type Service = {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
}
export const services: Service[] = [
    {
        id: "01",
        title: "Static Guarding",
        description: "Professional onsite physical security and canine units for 24/7 asset protection.",
        icon: <MdSecurity className="w-10 h-10" />,
    },
    {
        id: "02",
        title: "Electronic Security",
        description: "Advanced CCTV, biometrics, and remote monitoring powered by AI detection.",
        icon: <MdSettingsRemote className="w-10 h-10" />,
    },
    {
        id: "03",
        title: "Cash Management",
        description: "Armored transit and secure vaulting solutions for high-value logistics.",
        icon: <MdLocalShipping className="w-10 h-10" />,
    },
    {
        id: "04",
        title: "Rapid Response",
        description: "Immediate tactical deployment and emergency medical support at the touch of a button.",
        icon: <MdFlashOn className="w-10 h-10" />,
    },
    {
        id: "05",
        title: "Risk Consulting",
        description: "Comprehensive security audits and strategic safety frameworks for corporate clients.",
        icon: <MdAssignmentTurnedIn className="w-10 h-10" />,
    },
];