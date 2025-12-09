import React from 'react';
import { FaSearch, FaUserCheck, FaCalendarAlt, FaCreditCard } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: FaSearch,
            title: "Search Service",
            description: "Browse through our categories or search for the specific service you need in your area."
        },
        {
            icon: FaUserCheck,
            title: "Choose Provider",
            description: "Compare verified professionals based on ratings, reviews, prices, and availability."
        },
        {
            icon: FaCalendarAlt,
            title: "Book Appointment",
            description: "Select a convenient time slot and confirm your booking instantly with the provider."
        },
        {
            icon: FaCreditCard,
            title: "Pay & Review",
            description: "Make secure payments after service completion and share your experience."
        },
    ];

    return (
        <div className="py-24 bg-white relative overflow-hidden">
            <div className="w-full px-6 lg:px-16 relative z-10">
                <div className="text-center mb-20">
                    <div className="mb-4 px-4 py-1.5 bg-orange-50 inline-block rounded-full">
                        <span className="text-sm text-orange-600 font-bold">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-heading tracking-tight">
                        Book Services in 4 Easy Steps
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Getting help has never been easier. Our streamlined process ensures you find the right professional quickly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop Only) */}
                    <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-100 to-transparent z-0 hidden md:block"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Watermark Number */}
                            <span className="absolute -top-12 right-0 text-9xl font-black text-teal-50/80 -z-10 select-none group-hover:text-teal-100 transition-colors duration-300 font-heading">
                                0{index + 1}
                            </span>

                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full relative z-10">
                                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 font-heading">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
