import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaShareAlt, FaShieldAlt, FaBolt, FaUsers, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="min-h-[calc(100vh-64px)]">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="container mx-auto lg:px-14 sm:px-8 px-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Linkly</h1>
                        <p className="text-lg text-gray-100 leading-relaxed">
                            We're on a mission to simplify link sharing and provide powerful analytics 
                            to help you make data-driven decisions about your online content.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto lg:px-14 sm:px-8 px-5">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Features</h2>
                            <p className="text-gray-600">
                                Discover what makes Linkly the preferred choice for URL shortening and analytics.
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex flex-col md:flex-row items-start gap-6"
                            >
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <FaLink className="text-blue-600 text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Simple URL Shortening
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Experience the ease of creating short, memorable URLs in just a
                                        few clicks. Our intuitive interface and quick setup process
                                        ensure you can start shortening URLs without any hassle. Perfect for
                                        social media posts, email campaigns, and any situation where you need
                                        concise links.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col md:flex-row items-start gap-6"
                            >
                                <div className="bg-green-100 p-4 rounded-full">
                                    <FaChartLine className="text-green-600 text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Powerful Analytics
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gain insights into your link performance with our comprehensive
                                        analytics dashboard. Track clicks, geographical data, and
                                        referral sources to optimize your marketing strategies. Make data-driven
                                        decisions about your content and understand your audience better with
                                        detailed reports and visualizations.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col md:flex-row items-start gap-6"
                            >
                                <div className="bg-purple-100 p-4 rounded-full">
                                    <FaShieldAlt className="text-purple-600 text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Enhanced Security
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rest assured with our robust security measures. All shortened
                                        URLs are protected with advanced encryption, ensuring your data
                                        remains safe and secure. We prioritize the privacy of your information
                                        and implement industry-standard security protocols to protect against
                                        unauthorized access and data breaches.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col md:flex-row items-start gap-6"
                            >
                                <div className="bg-red-100 p-4 rounded-full">
                                    <FaBolt className="text-red-600 text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Fast and Reliable
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Enjoy lightning-fast redirects and high uptime with our reliable
                                        infrastructure. Your shortened URLs will always be available and
                                        responsive, ensuring a seamless experience for your users. Our globally
                                        distributed servers minimize latency and provide quick access to your
                                        links from anywhere in the world.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto lg:px-14 sm:px-8 px-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At Linkly, we believe in making the web more accessible and measurable. 
                            Our goal is to provide tools that help individuals and businesses optimize 
                            their online presence through simplified link management and data-driven insights.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto flex items-center gap-6 border border-gray-100"
                    >
                        <div className="bg-blue-100 p-4 rounded-full hidden sm:block">
                            <FaUsers className="text-blue-600 text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Join Our Community</h3>
                            <p className="text-gray-600 mb-4">
                                Become part of our growing community of marketers, content creators, and businesses 
                                who are leveraging Linkly to improve their online presence.
                            </p>
                            <button 
                                onClick={() => {}}
                                className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md px-6 py-2 transition-all duration-300"
                            >
                                Get Started Today
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;