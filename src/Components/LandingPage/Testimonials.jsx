import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: "Jennifer Martinez",
            role: "Homeowner",
            text: "ServiConnect made finding a reliable electrician so easy. The booking process was smooth, and the professional arrived on time. Highly recommend!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
        },
        {
            name: "Robert Thompson",
            role: "Business Owner",
            text: "I use ServiConnect for all my office maintenance needs. The quality of service providers here is exceptional. It's saved me so much time and hassle.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Priya Sharma",
            role: "Working Professional",
            text: "As someone with a busy schedule, having beauty services come to my home is a game-changer. The professionals are talented and punctual.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <div className="py-24 bg-[#FAFAFA]">
            <div className="w-full px-6 lg:px-16">
                <div className="text-center mb-16">
                    <div className="mb-4 px-4 py-1.5 bg-teal-50 inline-block rounded-full">
                        <span className="text-sm text-teal-700 font-bold">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-heading tracking-tight">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of satisfied customers who found their perfect service providers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-gray-100">
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-teal-50 absolute top-8 right-8 text-6xl group-hover:text-teal-100 transition-colors" />

                            <div className="flex mb-6 gap-1 relative z-10">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-amber-400 text-lg" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed font-medium relative z-10 h-32">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                                <div>
                                    <h4 className="font-bold text-gray-900 font-heading text-lg">{review.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
