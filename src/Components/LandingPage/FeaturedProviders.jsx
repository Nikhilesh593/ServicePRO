import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

const FeaturedProviders = () => {
    const providers = [
        {
            name: "Michael Chen",
            role: "Master Electrician",
            rating: "4.9",
            reviews: "234",
            location: "Downtown",
            experience: "8+ years",
            rate: "$45",
            image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop",
            verified: true
        },
        {
            name: "Sarah Williams",
            role: "Professional Cleaner",
            rating: "4.8",
            reviews: "189",
            location: "Midtown",
            experience: "5+ years",
            rate: "$35",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop",
            verified: true
        },
        {
            name: "David Kumar",
            role: "Licensed Plumber",
            rating: "4.9",
            reviews: "312",
            location: "Westside",
            experience: "12+ years",
            rate: "$50",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            verified: true
        },
        {
            name: "Emily Parker",
            role: "Beauty Specialist",
            rating: "5.0",
            reviews: "156",
            location: "Uptown",
            experience: "6+ years",
            rate: "$55",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            verified: true
        }
    ];

    return (
        <section className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 w-full">
                    <div className="max-w-2xl">
                        <div className="mb-3 px-3 py-1 bg-green-50 inline-block rounded-full">
                            <span className="text-xs text-green-600 font-bold uppercase tracking-wide">
                                Top Rated
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900 font-heading">
                            Featured Service Providers
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Work with the best. Our top-rated professionals are ready to help you.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-brand-500 text-brand-500 font-bold rounded-full hover:bg-brand-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                        View All Providers <FaArrowRight />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
                    {providers.map((provider, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full flex flex-col"
                        >
                            <div className="flex justify-center mb-4 relative">
                                <img
                                    src={provider.image}
                                    alt={provider.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md bg-gray-100"
                                />
                                {provider.verified && (
                                    <div className="absolute bottom-0 right-[calc(50%-40px)] bg-teal-500 text-white rounded-full p-1 border-2 border-white">
                                        <FaCheckCircle className="text-xs" />
                                    </div>
                                )}
                            </div>
                            <div className="text-center mb-4 flex-grow">
                                <h3 className="text-lg font-bold mb-1 text-brand-900 font-heading leading-tight">{provider.name}</h3>
                                <p className="text-sm text-teal-500 font-medium">{provider.role}</p>
                            </div>

                            <div className="flex justify-center items-center gap-1 mb-4 bg-gray-50 py-1 rounded-lg mx-auto w-fit px-3">
                                <FaStar className="text-orange-400" />
                                <span className="font-bold text-gray-900">{provider.rating}</span>
                                <span className="text-gray-500 text-sm">({provider.reviews})</span>
                            </div>

                            <div className="flex justify-between md:justify-center gap-4 text-sm text-gray-500 mb-6 font-medium border-b border-gray-50 pb-4">
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-gray-400" />
                                    {provider.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    • {provider.experience}
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-auto">
                                <div>
                                    <p className="text-lg font-bold text-brand-900">{provider.rate}<span className="text-sm text-gray-500 font-normal">/hr</span></p>
                                </div>
                                <button className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold rounded-xl transition-colors shadow-md shadow-teal-500/20 cursor-pointer">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProviders;
