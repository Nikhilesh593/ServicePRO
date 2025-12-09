import React from 'react';
import { FaMapMarkerAlt, FaSearch, FaStar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="relative bg-[#FAFAFA] overflow-hidden">
            <div className="w-full px-6 lg:px-16 pt-12 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        {/* Trusted Badge */}
                        <div className="mb-6 inline-block">
                            <span className="px-4 py-1.5 bg-teal-50 rounded-full text-sm text-teal-700 font-medium flex items-center gap-2">
                                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                                Trusted by 50,000+ customers
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl lg:text-[5.5rem] font-black leading-[1.1] mb-8 text-gray-900 font-heading tracking-tight">
                            Find Local <br />
                            <span className="text-teal-600">Service Experts</span> <br />
                            Near You
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                            Connect with verified professionals for all your home and personal service needs. Book instantly, pay securely, and get things done.
                        </p>

                        {/* Search Bar Container */}
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-200 max-w-xl w-full flex flex-col md:flex-row gap-2">
                            <div className="flex-1 relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaSearch className="text-gray-400 text-lg" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 font-medium"
                                    placeholder="What service do you need?"
                                />
                            </div>
                            <div className="hidden md:block w-px h-10 bg-gray-200 self-center"></div>
                            <div className="flex-1 relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaMapMarkerAlt className="text-gray-400 text-lg" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 font-medium"
                                    placeholder="Your location"
                                />
                            </div>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md active:scale-95 text-lg">
                                Search
                            </button>
                        </div>

                        {/* Trust Metrics */}
                        <div className="mt-16 flex gap-12 border-t border-gray-200 pt-8">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg">
                                    <FaStar className="text-teal-600 text-xl" />
                                </div>
                                <div>
                                    <p className="font-black text-2xl text-gray-900">4.9</p>
                                    <p className="text-sm text-gray-500 font-medium">Average Rating</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg">
                                    <FaShieldAlt className="text-teal-600 text-xl" />
                                </div>
                                <div>
                                    <p className="font-black text-2xl text-gray-900">10K+</p>
                                    <p className="text-sm text-gray-500 font-medium">Verified Pros</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg">
                                    <FaCheckCircle className="text-teal-600 text-xl" />
                                </div>
                                <div>
                                    <p className="font-black text-2xl text-gray-900">24/7</p>
                                    <p className="text-sm text-gray-500 font-medium">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bento Grid Images */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        <div className="grid grid-cols-2 gap-6 h-full p-4">
                            {/* Card 1: Electrician */}
                            <div className="col-span-2 md:col-span-1 relative h-64 rounded-[2rem] overflow-hidden group shadow-lg">
                                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Electrician" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <p className="font-bold text-gray-900 text-lg">Electrical Services</p>
                                    <div className="flex items-center gap-1 text-sm text-gray-500 font-medium mt-1">
                                        <FaStar className="text-orange-400" /> 4.9 • 120+ providers
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Plumber */}
                            <div className="col-span-2 md:col-span-1 h-64 rounded-[2rem] overflow-hidden shadow-lg">
                                <img src="https://images.unsplash.com/photo-1581578731117-104529302f24?q=80&w=1999&auto=format&fit=crop" className="w-full h-full object-cover h-full" alt="Plumber" />
                            </div>

                            {/* Floating Verification Badge */}
                            <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                                <div className="p-3 bg-green-50 rounded-full">
                                    <FaShieldAlt className="text-green-500 text-2xl" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-gray-900">100% Verified</p>
                                    <p className="text-xs text-gray-500 font-medium">Background checked</p>
                                </div>
                            </div>

                            {/* Card 3: Cleaner (Large) */}
                            <div className="col-span-2 md:col-span-1 h-64 rounded-[2rem] overflow-hidden shadow-lg mt-8">
                                <img src="https://images.unsplash.com/photo-1527515664-629a478c54f9?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cleaner" />
                            </div>

                            {/* Card 4: Beauty (Large with Overlay) */}
                            <div className="col-span-2 md:col-span-1 relative h-64 rounded-[2rem] overflow-hidden group shadow-lg mt-8">
                                <img src="https://images.unsplash.com/photo-1560066984-12186d30b93c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Salon" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                    <p className="font-bold text-gray-900 text-lg">Beauty & Wellness</p>
                                    <div className="flex items-center gap-1 text-sm text-gray-500 font-medium mt-1">
                                        <FaStar className="text-orange-400" /> 4.8 • 85+ providers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
