'use client';

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="bg-black">
            <article className="flex min-h-screen flex-col items-center justify-between text-white">
                {/* Navigation - Simple Apple-style */}
                <nav className="w-full max-w-[85vw] mx-auto flex items-center justify-between py-6 bg-black/90 backdrop-blur-xl sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">A</span>
                        </div>
                        <span className="text-xl font-light tracking-tight">Asyyl</span>
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
                        {['Design', 'Develop', 'Work', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 md:py-0 text-lg md:text-base font-light text-gray-300 hover:text-white transition-all duration-300"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen w-full max-w-[85vw] mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-0"></div>

                    <div className="relative z-20">
                        <h1 className="text-6xl md:text-8xl font-semibold mb-8 tracking-tight leading-tight">
                            Software. <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Perfected.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                            We design and build exceptional digital experiences that transform businesses. Beautiful, intuitive, and powerful.
                        </p>
                        <button className="group relative bg-white text-black px-14 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Start a Project
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </section>

                {/* Process Section with Numbers */}
                <section id="process" className="w-full py-32 bg-black">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">Our Process.</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                A meticulous approach to crafting exceptional software experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { number: "01", title: "Discover", description: "Deep understanding of your business goals and user needs through research and strategy sessions." },
                                { number: "02", title: "Design", description: "Pixel-perfect interfaces and experiences crafted with attention to every detail." },
                                { number: "03", title: "Develop", description: "Clean, scalable code built with modern technologies and best practices." },
                                { number: "04", title: "Deliver", description: "Thorough testing and seamless launch with ongoing support and maintenance." }
                            ].map((step, index) => (
                                <div key={step.number} className="group text-center">
                                    <div className="text-8xl font-light text-gray-800 group-hover:text-blue-400 transition-colors duration-500 mb-6">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full py-32">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">What We Build.</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                From concept to launch, we create software that works beautifully and delivers results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Web Applications",
                                    description: "Responsive, scalable web platforms built with modern frameworks and cloud technologies."
                                },
                                {
                                    title: "Mobile Experiences",
                                    description: "Native and cross-platform mobile apps that feel at home on iOS and Android."
                                },
                                {
                                    title: "Cloud Solutions",
                                    description: "Architected for scale, security, and performance in the cloud environment."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group p-8 border border-gray-800 rounded-3xl hover:border-gray-600 transition-all duration-500">
                                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                    <button className="group relative text-white px-8 py-4 rounded-full font-medium transition-all duration-500 border border-gray-600 hover:border-white">
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
                <section id="work" className="w-full py-32 bg-black">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">Our Work.</h2>
                            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                                Real projects, real results. See how we&apos;ve helped businesses transform through technology.
                            </p>
                        </div>

                        <div className="space-y-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { name: "E-commerce Platform", desc: "Scalable retail solution processing 10,000+ daily orders" },
                                    { name: "SaaS Dashboard", desc: "Analytics platform with real-time data visualization" }
                                ].map((project, index) => (
                                    <div key={index} className="group aspect-video rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500 p-12 flex flex-col justify-center">
                                        <h3 className="text-4xl font-semibold mb-4 text-white">{project.name}</h3>
                                        <p className="text-gray-300 mb-8 text-lg font-light">{project.desc}</p>
                                        <div className="flex items-center gap-4 text-blue-400">
                                            <span className="text-sm font-medium">React + Node.js</span>
                                            <span className="text-sm font-medium">•</span>
                                            <span className="text-sm font-medium">AWS Cloud</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { name: "Mobile Banking", tech: "React Native + Firebase" },
                                    { name: "Healthcare Portal", tech: "Vue.js + Python" },
                                    { name: "Logistics System", tech: "Angular + .NET" }
                                ].map((project, index) => (
                                    <div key={index} className="group aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500 p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-3xl font-semibold mb-4 text-white">{project.name}</h3>
                                            <p className="text-gray-300 mb-6 font-light">Enterprise-grade solution</p>
                                        </div>
                                        <div className="text-blue-400 text-lg font-medium">
                                            {project.tech}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="w-full py-32">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">Client Stories.</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Don&apos;t just take our word for it. Here&apos;s what our partners have to say.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "Asyyl delivered beyond our expectations. The attention to detail and technical excellence is remarkable.",
                                    author: "Sarah Chen",
                                    company: "TechFlow Inc."
                                },
                                {
                                    quote: "Working with Asyyl felt like having an in-house team of experts. They understood our vision perfectly.",
                                    author: "Marcus Johnson",
                                    company: "Global Retail Co."
                                },
                                {
                                    quote: "The quality of code and design thinking sets Asyyl apart. Our users love the experience.",
                                    author: "Emily Rodriguez",
                                    company: "Growth Marketing Pro"
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className="p-8 border border-gray-800 rounded-3xl hover:border-gray-600 transition-all duration-500">
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
                <section id="contact" className="w-full py-32 bg-black">
                    <div className="max-w-[85vw] mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight">Let&apos;s Build Together.</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Have an idea? Let&apos;s discuss how we can bring it to life with beautiful, functional software.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative bg-white text-black px-12 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Conversation
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                            <button className="group relative border border-gray-600 text-white px-12 py-5 rounded-full font-medium text-lg transition-all duration-500 hover:border-white">
                                <span className="relative z-10">View Our Work</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 border-t border-gray-800/60">
                    <div className="max-w-[85vw] mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-semibold text-xs">A</span>
                            </div>
                            <span className="text-lg font-light">Asyyl</span>
                        </div>
                        <div className="flex gap-6 mb-6 md:mb-0">
                            {['Privacy', 'Terms', 'Contact', 'GitHub'].map((item) => (
                                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm font-light">
                            &copy; 2024 Asyyl. Crafted with precision.
                        </p>
                    </div>
                </footer>
            </article>
        </main>
    );
}