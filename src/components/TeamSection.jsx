import React from "react";
import { motion } from "framer-motion";
import Kannan from '../assets/Team/Kannan.jpg'
const teamMembers = [
  {
    name: "Ar.John praveen",
    designation: "Founder",
    description:
      "Blending creativity with functionality, our interior designer transforms spaces into timeless reflections of style and purpose. With a keen eye for detail and a deep understanding of color, form, and texture, they curate environments that are both beautiful and livable.From residential to commercial projects, every design begins with a story — your story. Through close collaboration, thoughtful planning, and an appreciation for both aesthetics and practicality, our designer creates interiors that feel effortless, intentional, and uniquely yours.Whether it's a modern minimalist space, a cozy retreat, or a bold statement interior, the result is always the same: design that elevates everyday living.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Ar.Akash Govindasamy ",
    designation: "Architect",
    description:
      "Akash is a passionate and innovative architect dedicated to crafting spaces that blend functionality, aesthetics, and sustainability. With 3 years of experience in the design and construction industries, Akash specializes in Residential, Commercial and Institutional spaces, Creating timeless structures that inspire and serve their communities.Guided by a philosophy that embraces both modernity and tradition, Architect approaches each project with a deep understanding of client needs, environmental impact, and the cultural context of the space. Whether working on large-scale urban developments, custom homes, or interiors, the goal is always to create environments that enhance the human experience.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Maha Kannan",
    designation: "Designer",
    description:
      "Our designer brings ideas to life through thoughtful, impactful design. With a strong eye for detail and a passion for user-centered solutions, they craft visuals that not only look great but also function seamlessly across digital platforms. From websites and branding to digital campaigns and UI/UX, the designer ensures every element aligns with the brand’s vision and communicates clearly with its audience. Their approach combines aesthetics with strategy—creating experiences that are both beautiful and purposeful..",
    image: Kannan,
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
        <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-indigo-600 font-medium ">
                {member.designation}
              </p>
              <p className="text-gray-600 text-sm mt-2 text-justify">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
