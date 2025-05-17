import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  const dashBoardNavigateHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto lg:px-14 sm:px-8 px-4 py-20">
          <div className="lg:flex-row flex-col lg:py-5 pt-8 lg:gap-10 gap-8 flex justify-between items-center">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-bold font-montserrat md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[90%] w-full"
              >
                Simplify Your Links, <br />
                <span className="text-yellow-300">Amplify Your Reach</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-100 my-6 lg:w-[90%] md:w-[85%] leading-relaxed"
              >
                Linklytics streamlines the process of URL shortening, making sharing
                links effortless and efficient. With our powerful analytics, you can track
                performance and optimize your sharing strategy.
              </motion.p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={() => navigate("/register")}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started — It's Free
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  onClick={dashBoardNavigateHandler}
                  className="border border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-full px-8 py-3 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sm:w-[480px] w-[400px] object-cover rounded-lg shadow-2xl"
                src="/images/img2.png"
                alt="URL Shortening Illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto lg:px-14 sm:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Linklytics?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by individuals and teams at the world's best companies to simplify link sharing and gain valuable insights.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <Card
              icon={FaLink}
              title="Simple URL Shortening"
              desc="Create short, memorable URLs in just a few clicks with our intuitive interface and quick setup process."
            />
            <Card
              icon={FaChartLine}
              title="Powerful Analytics"
              desc="Gain insights into your link performance with comprehensive analytics to optimize your marketing strategies."
            />
            <Card
              icon={FaShieldAlt}
              title="Enhanced Security"
              desc="All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
            />
            <Card
              icon={FaBolt}
              title="Fast and Reliable"
              desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure for a seamless user experience."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto lg:px-14 sm:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to simplify your links?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of users who are already enjoying the benefits of Linklytics. Start shortening your URLs today!
            </p>
            <button 
              onClick={() => navigate("/register")}
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign Up For Free
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;