import React, { useRef } from "react";
import Banner1 from "../assets/Banners/You Dream it.png";
import { motion, useInView } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true });
  const isHistoryInView = useInView(historyRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[25vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden shadow-md"
      >
        <img
          src={Banner1}
          alt="Interior Design Banner - Zapspace"
          className="w-full h-full object-cover rounded-b-2xl"
        />
      </motion.div>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        className="max-w-6xl mx-auto px-6 py-12 text-start"
      >
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold border-b-4 border-yellow-400 inline-block pb-2 mb-8">
            About Us
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isAboutInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Zapspace</strong>, we are passionate about redefining interiors with
            <span className="font-medium text-gray-900"> innovative, elegant, and smart design solutions</span>.
            We specialize in <span className="font-medium text-gray-900">modular kitchens, wardrobes, home interiors, and premium fittings </span>
            tailored for <strong>Chennai, Trichy, Madurai, Coimbatore, Salem</strong>, and across <strong>TamilNadu, Kerala and Karnataka</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            With <strong>700+ successful interior projects</strong> completed in both homes and commercial spaces,
            our team continues to deliver exceptional value, style, and function.
            Trusted by clients across TamilNadu, Kerala and Karnataka, <strong> Zapspace stands for quality and commitment</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Our work isn’t just about decor—it’s about creating practical spaces that inspire. From ergonomic kitchens
            to vibrant living areas, we bring your ideas to life with creativity and precision.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            Transform your space with Zapspace — Where Innovation Meets Perfection.
          </p>
        </motion.div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="max-w-6xl mx-auto px-6 text-start"
      >
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-yellow-400 inline-block pb-2 mb-6">
            Our History – Trusted Interior Experts of South Tamil Nadu
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isHistoryInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            With over <strong>25 years of experience</strong>, Zapspace has established itself as a trusted name in  
            <strong> home and commercial interior design. </strong> We proudly serve Chennai, Trichy, Madurai, Coimbatore, Salem, and surrounding areas across Tamil Nadu and neighboring states.
            We started small with a big dream — to provide <strong>tailor-made designs</strong> to match the lifestyle of Tamil Nadu.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Our track record includes <strong>500+ happy clients</strong> and <strong>word-of-mouth referrals</strong> built on trust, value,
            and impeccable results.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            Choose Zapspace for interiors that tell your story — rooted in heritage, delivered with modern flair.
          </p>
        </motion.div>
      </section>

      {/* Effective Teamwork Section */}
      <section
        ref={teamRef}
        className="max-w-6xl mx-auto px-6 py-12 text-start"
      >
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-yellow-400 inline-block pb-2 mb-6">
            Effective Teamwork – The Backbone of Our Success
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isTeamInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Zapspace</strong>, we believe great design is a team effort. Our crew includes top-notch professionals in{" "}
            <span className="text-gray-900 font-medium">architecture, interior design, construction, cost control, and legal advisory</span>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Every project receives a <strong>dedicated team</strong>—ensuring smooth coordination, faster turnarounds, and excellent client communication.
            Our team’s synergy ensures that every detail is handled with precision and care.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            We follow <strong>international standards</strong> while customizing every design for <strong>local taste and lifestyle</strong>. Our team is equipped with 
            <span className="text-gray-900 font-medium"> advanced tools and project management skills</span>.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            With Zapspace, <strong className="text-xl">you don't just hire a team — you gain a passionate design partner.</strong> 
          </p>
        </motion.div>
      </section> 
    </div>
  );
};

export default About;
