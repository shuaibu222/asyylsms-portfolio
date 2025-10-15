'use client'

import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleEmailClick = () => {
        window.location.href =
            'mailto:asyylsms@gmail.com?subject=Let’s%20Get%20Started&body=Hello%2C%20I’m%20interested%20in%20working%20with%20AsyylSMS.'
    }

    const handleExploreClick = () => {
        const element = document.getElementById('services')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <main className="bg-black">
            <article className="flex min-h-screen flex-col items-center justify-between text-white">
                {/* Navigation - Simple Apple-style */}
                <div className="w-full bg-black/90 backdrop-blur-xl sticky top-0 z-50">
                    <nav className="w-full max-w-[85vw] mx-auto flex items-center justify-between py-6">
                        <div className="flex items-center gap-3">
                            {/* Logo Image */}
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/logo.png"
                                    alt="AsyylSMS Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                {isOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {/* lets add apple animation to the navigation */}
                        <ul
                            className={`${
                                isOpen ? 'flex' : 'hidden'
                            } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-8 md:p-0 border-t border-gray-800/60 md:border-none transform transition-all duration-300`}
                        >
                            {['Design', 'Develop', 'Work', 'Contact'].map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="block py-2 md:py-0 tracking-[0.03em] text-sm font-light text-gray-300 hover:text-white transition-all duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-screen w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-0"></div>

                    <div className="relative z-20 max-w-[85vw] mx-auto">
                        <h1 className="text-6xl md:text-8xl font-semibold mb-8 tracking-tight">
                            Technology.{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Redefined.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                            Innovative digital solutions. Websites and software that inspire.
                        </p>
                        <button className="group relative bg-white text-black px-14 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-200">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Begin Now
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </section>

                {/* Process Section - Grid Layout */}
                <section id="process" className="w-full py-32 bg-black">
                    <div className="max-w-[85vw] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
                                Precision. Craft.
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                                Seamless technology. Designed to captivate. Built to perform.
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Insightful analysis. Strategic vision.',
                                    'Agile creation. Relentless refinement.',
                                    'Rigorous testing. Uncompromising quality.',
                                    'Flawless launch. Ongoing excellence.',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 text-lg">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Number Grid */}
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            {[
                                { number: '01', title: 'Discover' },
                                { number: '02', title: 'Design' },
                                { number: '03', title: 'Develop' },
                                { number: '04', title: 'Deliver' },
                            ].map((step, index) => (
                                <div
                                    key={step.number}
                                    className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex flex-col items-center justify-center p-6 group hover:border-gray-600 transition-all duration-300"
                                >
                                    <div className="text-5xl font-light text-gray-700 group-hover:text-blue-400 transition-colors duration-300 mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white text-center">
                                        {step.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full py-32">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Solutions. Inspired.
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Digital experiences that transform. Websites and software,
                                reimagined.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Custom Websites',
                                    description:
                                        'Stunning designs. Seamless functionality. Unforgettable experiences.',
                                },
                                {
                                    title: 'Web Applications',
                                    description:
                                        'Powerful apps. Streamlined workflows. Limitless potential.',
                                },
                                {
                                    title: 'Mobile Apps',
                                    description:
                                        'Native experiences. Intuitive interfaces. Always connected.',
                                },
                                {
                                    title: 'Software Solutions',
                                    description:
                                        'Tailored tools. Optimized performance. Business transformed.',
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="group p-8 border border-gray-800 rounded-3xl hover:border-gray-600 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                    <button className="group relative text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-gray-600 hover:border-gray-400">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Discover More
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
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Impact. Realized.
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                                Digital solutions that empower. Innovation that delivers.
                            </p>
                        </div>

                        <div className="space-y-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        name: 'Excellent Schools Solution',
                                        desc: 'Empowering education. Simplifying management.',
                                        tech: 'Spring MVC + Thymeleaf + PostgreSQL',
                                    },
                                    {
                                        name: 'Smart Business Solution',
                                        desc: 'Streamlining operations. Driving growth.',
                                        tech: 'Spring MVC + Thymeleaf + PostgreSQL',
                                    },
                                ].map((project, index) => (
                                    <div
                                        key={index}
                                        className="group aspect-video rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-300 p-12 flex flex-col justify-center"
                                    >
                                        <h3 className="text-4xl font-semibold mb-4 text-white">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-300 mb-8 text-lg font-light">
                                            {project.desc}
                                        </p>
                                        <div className="flex items-center gap-4 text-blue-400">
                                            <span className="text-sm font-medium">
                                                {project.tech}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        name: 'E-Learning Platform',
                                        tech: 'Next.js + Tailwind + PostgreSQL',
                                        type: 'Education Tools',
                                    },
                                    {
                                        name: 'Custom Websites',
                                        tech: 'Next.js + Tailwind',
                                        type: 'All Kind of Websites',
                                    },
                                ].map((project, index) => (
                                    <div
                                        key={index}
                                        className="group aspect-video rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 flex flex-col justify-between"
                                    >
                                        <div>
                                            <h3 className="text-3xl font-semibold mb-4 text-white">
                                                {project.name}
                                            </h3>
                                            <p className="text-gray-300 mb-6 font-light">
                                                {project.type}
                                            </p>
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
                {/* <section id="testimonials" className="w-full py-32">
                    <div className="max-w-[85vw] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                                Stories. Success.
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Our partners thrive. Their victories, our pride.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: 'Transformed our brand. Engagement redefined.',
                                    author: 'Emma Carter',
                                    company: 'BrightWave Retail',
                                },
                                {
                                    quote: 'Streamlined operations. Efficiency unleashed.',
                                    author: 'Liam Patel',
                                    company: 'TechTrend Solutions',
                                },
                                {
                                    quote: 'Inspired experiences. Users connected globally.',
                                    author: 'Sophie Nguyen',
                                    company: 'GlobalTech Innovations',
                                },
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="p-8 border border-gray-800 rounded-3xl hover:border-gray-600 transition-all duration-300"
                                >
                                    <div className="text-4xl text-gray-600 mb-4">&quot;</div>
                                    <p className="text-lg text-gray-300 italic mb-6 leading-relaxed font-light">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <footer className="text-right">
                                        <div className="text-white font-medium">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {testimonial.company}
                                        </div>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
                <section id="contact" className="w-full py-32 bg-black">
                    <div className="max-w-[85vw] mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
                            Innovate. Now.
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Your vision. Our technology. Infinite possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleEmailClick}
                                className="group relative bg-white text-black px-12 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-200"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Now
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>

                            <button
                                onClick={handleExploreClick}
                                className="group relative border border-gray-600 text-white px-12 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:border-gray-400"
                            >
                                <span className="relative z-10">Explore Solutions</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 border-t border-gray-800/60">
                    <div className="max-w-[85vw] mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/logo.png"
                                    alt="AsyylSMS Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 mb-6 md:mb-0">
                            {['Privacy', 'Terms', 'Contact', 'GitHub'].map(item => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm font-light">
                            &copy; 2025 AsyylSMS. Crafted with vision.
                        </p>
                    </div>
                </footer>
            </article>
        </main>
    )
}
