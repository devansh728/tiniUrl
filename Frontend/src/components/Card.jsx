import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";

const Card = ({ title, desc }) => {
  // Map titles to icons
  const getIcon = () => {
    if (title.includes("Simple") || title.includes("URL")) return FaLink;
    if (title.includes("Analytics") || title.includes("Powerful")) return FaChartLine;
    if (title.includes("Security") || title.includes("Enhanced")) return FaShieldAlt;
    if (title.includes("Fast") || title.includes("Reliable")) return FaBolt;
    return FaLink; // Default icon
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
    >
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all duration-300">
        <Icon className="text-blue-600 text-xl group-hover:text-white transition-all duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-all duration-300">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default Card;