'use client';

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsCloud, BsCloudLightning } from "react-icons/bs"
import { RxCode } from "react-icons/rx";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="bg-black">
            <article className="flex min-h-screen flex-col items-center justify-between text-white">
                {/* Navigation - Premium Apple-style */}
                <nav className="w-full flex items-center justify-between px-8 py-6 bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800/60">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">AS</span>
                        </div>
                        <span className="text-xl font-light tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Asyyl SMS</span>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <ul className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-8 md:p-0 border-t border-gray-800/60 md:border-none`}>
                        {['Strategy', 'Solutions', 'Projects', 'Testimonials'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 md:py-0 text-lg md:text-base font-light text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hero Section - Premium Apple-style */}
                <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-0"></div>

                    <div className="relative z-20 max-w-6xl">
                        <h1 className="text-6xl md:text-8xl font-semibold mb-8 tracking-tight leading-tight">
                            Revolutionize Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Communication</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                            Enterprise-grade SMS solutions with unmatched reliability, speed, and global reach for businesses of all sizes.
                        </p>
                        <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-14 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Start Free Trial
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-10"></div>
                        </button>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
                </section>

                {/* How we approach projects Section */}
                <section id="approach" className="w-full py-32 px-6 bg-black">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 lg:pr-12">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Our Approach</h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                                At Asyyl SMS, we believe that reliable communication is the backbone of modern business. Our approach combines cutting-edge technology with enterprise-grade reliability.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "99.9% Uptime Guarantee",
                                    "Global Carrier Partnerships",
                                    "Real-time Analytics & Reporting",
                                    "24/7 Enterprise Support"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-4 text-lg group">
                                        <FaCheckCircle className="text-blue-400 flex-shrink-0 text-xl group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-gray-300 font-light group-hover:text-white transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {['Reliability', 'Speed', 'Security', 'Scale'].map((title, index) => (
                                <div key={title} className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl text-gray-600 group-hover:text-blue-400 transition-colors duration-500">
                                            {index === 0 && <BsCloud />}
                                            {index === 1 && <BsCloudLightning />}
                                            {index === 2 && <FaCheckCircle />}
                                            {index === 3 && <CiGlobe />}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                        <h3 className="text-3xl font-semibold text-white">{title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Our Solutions</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Comprehensive SMS solutions designed to scale with your business and connect you with customers worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: <CiGlobe />,
                                    title: "Global SMS API",
                                    description: "Send messages to 200+ countries with our robust, scalable API integration and real-time delivery reports."
                                },
                                {
                                    icon: <RxCode />,
                                    title: "Two-Factor Auth",
                                    description: "Secure your applications with reliable 2FA SMS verification that your users can trust."
                                },
                                {
                                    icon: <BsCloud />,
                                    title: "Bulk Messaging",
                                    description: "Reach thousands of customers instantly with our high-throughput bulk messaging platform."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                                    <div className="text-6xl mb-8 text-gray-500 group-hover:text-blue-400 transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                    <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Learn More
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="projects" className="w-full py-32 px-6 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Trusted By</h2>
                            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                                Leading companies rely on Asyyl SMS for their critical communication needs across industries.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Client showcase with improved spacing */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { name: "Enterprise Platform", desc: "Global notification system serving 10M+ users" },
                                    { name: "FinTech Solution", desc: "Secure transaction alerts and 2FA verification" }
                                ].map((project, index) => (
                                    <div key={index} className="group relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                                        <div className="absolute inset-0 flex flex-col justify-center p-12">
                                            <h3 className="text-4xl font-semibold mb-4 text-white">{project.name}</h3>
                                            <p className="text-gray-300 mb-8 text-lg font-light">{project.desc}</p>
                                            <div className="flex items-center gap-4 text-blue-400">
                                                <span className="text-sm font-medium">99.98% Uptime</span>
                                                <span className="text-sm font-medium">•</span>
                                                <span className="text-sm font-medium">50M+ Messages</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { name: "E-commerce", metrics: "2M+ Alerts/Month" },
                                    { name: "Healthcare", metrics: "1.5M+ Notifications" },
                                    { name: "Logistics", metrics: "3M+ Updates/Month" }
                                ].map((project, index) => (
                                    <div key={index} className="group relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-500 p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-3xl font-semibold mb-4 text-white">{project.name}</h3>
                                            <p className="text-gray-300 mb-6 font-light">Real-time customer communication</p>
                                        </div>
                                        <div className="text-blue-400 text-lg font-medium">
                                            {project.metrics}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="w-full py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">What Our Clients Say</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Join thousands of satisfied customers who trust Asyyl SMS for their business communication.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    quote: "Asyyl SMS transformed our customer communication. 99.9% reliability and incredible support.",
                                    author: "Sarah Chen",
                                    company: "TechFlow Inc."
                                },
                                {
                                    quote: "The global reach and delivery rates are unmatched. Essential for our international operations.",
                                    author: "Marcus Johnson",
                                    company: "Global Retail Co."
                                },
                                {
                                    quote: "Implementation was seamless, and the analytics provide invaluable insights for our marketing.",
                                    author: "Emily Rodriguez",
                                    company: "Growth Marketing Pro"
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                                    <div className="text-4xl text-gray-600 mb-4">&quot;</div>
                                    <p className="text-lg text-gray-300 italic mb-6 leading-relaxed font-light">&quot;{testimonial.quote}&quot;</p>
                                    <footer className="text-right">
                                        <div className="text-white font-medium">{testimonial.author}</div>
                                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="w-full py-32 px-6 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Start with 100 free messages. No credit card required. Experience the Asyyl SMS difference today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Free Trial
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                            <button className="group relative border border-gray-600 text-white px-12 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:border-white hover:scale-105">
                                <span className="relative z-10">View Documentation</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 px-6 border-t border-gray-800/60">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-semibold text-xs">AS</span>
                            </div>
                            <span className="text-lg font-light bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Asyyl SMS</span>
                        </div>
                        <div className="flex gap-6 mb-6 md:mb-0">
                            {['Privacy', 'Terms', 'Support', 'API Docs'].map((item) => (
                                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm font-light">
                            &copy; 2024 Asyyl SMS. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </article>
        </main>
    );
}