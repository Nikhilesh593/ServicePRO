
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTools } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="bg-[#111827] text-gray-300 pt-24 pb-12 font-body">
         <div className="w-full px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
               {/* Brand */}
               <div className="col-span-1 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="bg-teal-600 p-2.5 rounded-lg text-white">
                        <FaTools className="text-xl" />
                     </div>
                     <span className="text-2xl font-black font-heading tracking-tight text-white">
                        ServiConnect
                     </span>
                  </div>
                  <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">
                     Connecting you with trusted local service providers. Quality services, verified professionals, seamless bookings.
                  </p>

                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="text-teal-500 text-lg">✉</span> support@serviconnect.com
                     </div>
                     <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="text-teal-500 text-lg">📞</span> +1 (555) 123-4567
                     </div>
                     <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="text-teal-500 text-lg">📍</span> 123 Service Lane, Tech City
                     </div>
                  </div>
               </div>

               {/* Links Columns */}
               <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:pl-20">
                  <div>
                     <h4 className="text-white font-bold text-lg mb-8 font-heading">Services</h4>
                     <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Electrical</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Plumbing</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Cleaning</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Beauty</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Tutoring</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg mb-8 font-heading">Company</h4>
                     <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Press</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg mb-8 font-heading">Support</h4>
                     <ul className="space-y-4 text-gray-400 text-[15px]">
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Safety</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
               <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} ServiConnect. All rights reserved.
               </p>
               <div className="flex gap-4 mt-6 md:mt-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                     <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                     <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                     <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors">
                     <FaLinkedinIn />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
