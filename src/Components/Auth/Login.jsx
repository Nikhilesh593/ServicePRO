import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-body">
            <div className="max-w-4xl w-full space-y-8 bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side - Image/Branding */}
                <div className="hidden md:flex md:w-1/2 bg-teal-800 relative flex-col justify-between p-12 text-white">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black font-heading tracking-tight mb-4">
                            Welcome Back
                        </h2>
                        <p className="text-teal-100 text-lg leading-relaxed">
                            Log in to access your account, manage bookings, and connect with professionals.
                        </p>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-900 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10">
                        <p className="text-sm text-teal-200">
                            Don't have an account? <br />
                            <Link to="/signup" className="text-white font-bold hover:underline">Sign up for minimal access</Link>
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-10 md:p-12">
                    <div className="text-center md:text-left mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 font-heading">
                            Log In
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500 md:hidden">
                        Don't have an account? <Link to="/signup" className="font-bold text-teal-600 hover:text-teal-500">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
