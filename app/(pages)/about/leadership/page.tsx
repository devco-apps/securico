import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Common/Section";
import Awards from "@/components/Awards";

import TeamCard from "./TeamCard";

const LeadershipPage = () => {
  const team = [
    {
      name: "Dr Divine Simbi Ndhlukula",
      title: "Founder, Managing Director",
      bio: "Founder & Managing Director of SECURICO SECURITY SERVICES. A world renowned Business person who transformed the face of the Zimbabwean Security industry, infusing SECURICO with a wealth of business management knowledge and hands-on experience.",
      image: "/images/about/leader-dr.webp"
    },
    {
      name: "Gloria Zvaravanhu",
      title: "Board Chairperson",
      bio: "A Chartered Accountant with years of experience in financial management, 14 of which at Executive Management level. She holds a Bachelor of Accountancy degree from Rhodes University, South Africa, a Master in Business Leadership degree from the University of South Africa and an LLM degree in International Business Law from the University of Cumbria, UK. At continental level, she serves on the Pan African Federation of Accountants Board where she represents 15 countries in Southern Africa. At International Level, she serves on the business committee of the International Federation of Accountants.",
      image: "/images/about/leader-bd.webp"
    },
  ];

  return (
    <div>
      <Breadcrumb title="Executive Leadership" />
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto text-justify mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At SECURICO, our executive leadership is the cornerstone of our commitment to trust and security. Comprising dedicated professionals, our team serves as the guardians of your safety, leveraging deep expertise to deliver unwavering protection. We view our organization not merely as a workforce, but as a cohesive unit bound by a shared mission to safeguard what matters most.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Collaboration drives our excellence. We seamlessly blend diverse talents to engineer security solutions that set industry standards. Rooted in a culture of meritocracy, we recognize dedication and foster internal growth, ensuring that our leaders are as invested in our mission as they are experienced in their field. Every milestone we achieve is a step toward a safer world, fueled by a relentless drive to exceed expectations and inspire confidence.
          </p>
        </div>

      </div>

      <Section variant="wide" className="py-20 bg-gray-100 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.title}
              description={member.bio}
              image={member.image}
            />
          ))}
        </div>

      </Section>

      <Awards backgroundColor="white" />
    </div>
  );
};

export default LeadershipPage;
