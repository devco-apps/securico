import Breadcrumb from "@/components/Breadcrumb";

const LeadershipPage = () => {
  const leadershipTeam = [
    {
      name: "John Doe",
      title: "Chief Executive Officer",
      bio: "John has over 20 years of experience in the industry, leading our company to new heights with his strategic vision and passion for innovation.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      title: "Chief Technology Officer",
      bio: "Jane is a technology enthusiast with a deep understanding of emerging trends. She is responsible for our company's technology strategy and roadmap.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Peter Jones",
      title: "Chief Operating Officer",
      bio: "Peter ensures operational excellence across the company. His focus on efficiency and quality has been instrumental in our success.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  return (
    <div>
      <Breadcrumb title="Leadership" />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Leadership Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-primary mb-2">{member.title}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
