import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    description:
      "Visionary leader with 15+ years of experience in business strategy.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Jane Smith",
    designation: "CTO",
    description:
      "Expert in tech innovation, building scalable digital solutions.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Emily Johnson",
    designation: "Lead Designer",
    description:
      "Creative mind behind stunning interfaces and user experiences.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Michael Brown",
    designation: "Marketing Head",
    description: "Strategist driving growth through compelling campaigns.",
    image: "https://via.placeholder.com/300",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14 text-gray-800">
          Meet Our Team
        </h2>
        <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className=" bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-35 h-35 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">
                {member.designation}
              </p>
              <p className="text-gray-600 text-sm mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
