"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles, Zap, Globe, Brain } from "lucide-react"

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-black via-[#0a0a20] to-black min-h-screen">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiLz48cGF0aCBkPSJNMCA0MEw0MCAwIi8+PHBhdGggZD0iTTAgMjBMMjAgMCIvPjxwYXRoIGQ9Ik0yMCA2MEw2MCAyMCIvPjxwYXRoIGQ9Ik00MCA2MEw2MCA0MCIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 lg:pt-16">
                    {/* Logo and navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-8 lg:mb-0"
                    >
                        <div className="relative w-12 h-12">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#0066FF" stroke="#4D94FF" strokeWidth="2" />
                                <path d="M40 40 L60 40 L70 60 L50 70 L30 60 Z" fill="#FFFFFF" stroke="#4D94FF" strokeWidth="1" />
                            </svg>
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                                className="absolute inset-0 bg-blue-500 rounded-full filter blur-xl opacity-70 -z-10"
                            />
                        </div>
                        <span className="text-white text-2xl font-bold">
                            ViewOn
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">.AI</span>
                        </span>
                    </motion.div>

                    {/* Main hero content */}
                    <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative mb-4"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Unlock the full
                                <br />
                                <span className="relative inline-block">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 font-serif italic">
                                        Power of AI
                                    </span>
                                    <motion.span
                                        animate={{
                                            opacity: [0, 1, 0],
                                            x: [0, 10, 0],
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                        }}
                                        className="absolute -right-8 -top-6"
                                    >
                                        <Sparkles className="w-6 h-6 text-yellow-300" />
                                    </motion.span>
                                </span>
                            </h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: isVisible ? "100%" : 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                        >
                            Discover the best AI Models in One Place - Your gateway to 50+ leading AI assistants, all unified in a
                            seamless experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                            >
                                Join Now <ChevronRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/15 transition-all"
                            >
                                See Demo
                            </motion.button>
                        </motion.div>

                        {/* Feature highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl"
                        >
                            {[
                                { icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "50+ AI Models" },
                                { icon: <Brain className="w-5 h-5 text-purple-400" />, text: "Advanced Features" },
                                { icon: <Globe className="w-5 h-5 text-cyan-400" />, text: "One Subscription" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="flex items-center gap-2 p-2 rounded-lg"
                                >
                                    {feature.icon}
                                    <span className="text-sm text-gray-300">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* AI Models Marquee */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    className="mt-12 lg:mt-16"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
                        <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 overflow-hidden">
                            <h3 className="text-xl text-center text-white mb-6">Access Leading AI Assistants</h3>

                            {/* First Marquee Row - Left to Right */}
                            <div className="relative overflow-hidden py-2">
                                <motion.div
                                    animate={{ x: [0, -1920] }}
                                    transition={{
                                        duration: 30,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                    className="flex gap-4 absolute whitespace-nowrap"
                                >
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row1-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row1-dup-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Second Marquee Row - Right to Left (Opposite direction) */}
                            <div className="relative overflow-hidden py-2 mt-4">
                                <motion.div
                                    animate={{ x: [-1920, 0] }}
                                    transition={{
                                        duration: 25,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                    className="flex gap-4 absolute whitespace-nowrap"
                                >
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row2-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row2-dup-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Third Marquee Row - Left to Right (Faster) */}
                            <div className="relative overflow-hidden py-2 mt-4">
                                <motion.div
                                    animate={{ x: [0, -1920] }}
                                    transition={{
                                        duration: 20,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                    className="flex gap-4 absolute whitespace-nowrap"
                                >
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row3-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={`row3-dup-${i}`}
                                            whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                                            className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center p-3 hover:bg-white/20 transition-all cursor-pointer"
                                        >
                                            <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 opacity-80" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                        className="w-full h-full rounded-full border border-blue-500"
                    />
                </div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 opacity-20">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                        className="w-full h-full rounded-full border border-purple-500"
                    />
                </div>
            </div>
            {/* How It Works Section */}
            <section className="w-full py-16 mt-16 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            How{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                                ViewOn.AI
                            </span>{" "}
                            Works
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Experience the future of AI interaction with our unified platform that brings together the best AI models
                            in one place.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Choose Your AI",
                                description: "Browse and select from our extensive library of 50+ leading AI models.",
                                icon: (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                ),
                            },
                            {
                                step: "02",
                                title: "Seamless Interaction",
                                description: "Chat, create, and collaborate with your chosen AI through our intuitive interface.",
                                icon: (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                ),
                            },
                            {
                                step: "03",
                                title: "One Subscription",
                                description: "Access all AI models with a single subscription - no more juggling multiple accounts.",
                                icon: (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-4">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                ),
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                                className="relative p-6 rounded-xl"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
                                <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full flex flex-col items-center text-center">
                                    <div className="absolute -top-3 -right-3 bg-black/80 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white border border-white/20">
                                        {item.step}
                                    </div>
                                    {item.icon}
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/15 transition-all cursor-pointer"
                                    >
                                        Learn More
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        className="mt-12 text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all mx-auto"
                        >
                            Get Started Today <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

