import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
const Footer = () => {
  const address =
    "Trichy-Dindugal highways, Chidhambarathanpatti, Manaparai - 621306";
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const LocationHandler = () => {
    window.open(mapsUrl, "_blank");
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-300">
              Simplifying lives in every home, with efficient, stylish, and
              world-class design like never before. Zapspace offers an exclusive
              range of Modular kitchens, Kitchen Accessories, Wardrobe fittings,
              and Stunning Interiors.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <p>
                  Trichy-Dindugal highways,
                  <br />
                  Chidhambarathanpatti, Manaparai - 621306
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <p>
                  <p>+91 9500318231, 9865332207</p>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <p>info@example.com</p>
              </div>
            </div>

            {/* Map Placeholder with Animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 bg-gray-700 rounded-lg overflow-hidden h-32 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-500 text-2xl animate-bounce" />
                <div
                  onClick={LocationHandler}
                  className="absolute w-full h-full bg-blue-500 opacity-10 cursor-pointer"
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Zapspace. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
