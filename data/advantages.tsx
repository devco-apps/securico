// advantages

import { MdBolt, MdElectricBolt, MdLockClock, MdShield, MdStar } from 'react-icons/md'

import { IAdvantage } from '@/types/advantages'

const advantages: IAdvantage[] = [
    {
        id: 1,
        title: "Experience",
        description: "Providing a full range of services to meet any security requirement for more than two decades",
        icon: <MdShield />
    },
    {
        id: 2,
        title: "Prestigious",
        description: "Vetted security personnel providing constant surveillance, incident reporting and situational awareness",
        icon: <MdStar />
    },
    {
        id: 3,
        title: "24 / 7 Support",
        description: "Deploying highly trained, disciplined tactical & canine units to provide a the best protection",
        icon: <MdLockClock />
    },
    {
        id: 4,
        title: "Rapid Response",
        description: "Minimizing risk through lightning-fast deployment. When an alarm triggers, our tactical units are dispatched instantly to neutralize threats and secure the perimeter",
        icon: <MdElectricBolt />
    }
]

export default advantages