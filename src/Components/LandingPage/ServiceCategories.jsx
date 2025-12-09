import React from 'react';
import { FaBolt, FaTint, FaBroom, FaTools, FaCut, FaGraduationCap, FaCar, FaBug } from 'react-icons/fa';

const ServiceCategories = () => {
    const categories = [
        { name: "Electrical", icon: FaBolt, color: "text-amber-500", bg: "bg-amber-50", providers: "120+" },
        { name: "Plumbing", icon: FaTint, color: "text-blue-500", bg: "bg-blue-50", providers: "95+" },
        { name: "Home Cleaning", icon: FaBroom, color: "text-emerald-500", bg: "bg-emerald-50", providers: "200+" },
        { name: "Appliance Repair", icon: FaTools, color: "text-gray-600", bg: "bg-gray-100", providers: "85+" },
        { name: "Beauty Services", icon: FaCut, color: "text-pink-500", bg: "bg-pink-50", providers: "150+" },
        { name: "Tutoring", icon: FaGraduationCap, color: "text-indigo-500", bg: "bg-indigo-50", providers: "60+" },
        { name: "Vehicle Repair", icon: FaCar, color: "text-red-500", bg: "bg-red-50", providers: "45+" },
        { name: "Pest Control", icon: FaBug, color: "text-lime-600", bg: "bg-lime-50", providers: "30+" },
    ];

    return (
        <div className="py-20 bg-[#FAFAFA]">
            <div className="w-full px-6 lg:px-16">
                <div className="text-center mb-16">
                    <div className="mb-4 px-4 py-1.5 bg-teal-50 inline-block rounded-full">
                        <span className="text-sm text-teal-700 font-bold">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-heading tracking-tight">
                        Browse by Category
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Find the perfect professional for any job. From home repairs to personal care, we've got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <cat.icon className={`text-3xl ${cat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 font-heading">{cat.name}</h3>
                            <p className="text-sm text-gray-500 mb-1 leading-snug">Wiring, repairs, installations & more</p>
                            <div className="flex items-center justify-between mt-4 text-sm font-medium text-gray-400 group-hover:text-teal-600 transition-colors">
                                <span>{cat.providers} providers</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategories;
