import React from 'react';

const StatsSection = () => {
    const stats = [
        { label: "Happy Customers", value: "50K+" },
        { label: "Service Providers", value: "10K+" },
        { label: "Bookings Done", value: "100K+" },
        { label: "Average Rating", value: "4.9" },
    ];

    return (
        <div className="w-full px-6 lg:px-16 pb-20 bg-[#FAFAFA]">
            <div className="bg-teal-700 rounded-[2.5rem] py-16 px-8 shadow-xl shadow-teal-900/10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className="text-5xl lg:text-6xl font-black mb-3 font-heading tracking-tight">{stat.value}</p>
                            <p className="text-teal-100 font-medium text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
