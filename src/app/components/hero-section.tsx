"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Sparkles, Zap, Brain, Globe, Check, ArrowRight } from "lucide-react"

export default function HeroSection({ isVisible }: { isVisible: boolean }) {
    const controls = useAnimation()
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeFeature, setActiveFeature] = useState(0)

    const features = [
        {
            title: "50+ AI Models",
            description: "Access ChatGPT, Claude, Gemini, and many more with a single subscription",
            icon: <Brain className="w-6 h-6 text-blue-300" />,
            color: "from-blue-600 to-blue-400",
        },
        {
            title: "Unified Interface",
            description: "One consistent experience across all AI assistants and tools",
            icon: <Globe className="w-6 h-6 text-purple-300" />,
            color: "from-purple-600 to-purple-400",
        },
        {
            title: "Advanced Capabilities",
            description: "Image generation, code assistance, and creative writing in one place",
            icon: <Sparkles className="w-6 h-6 text-cyan-300" />,
            color: "from-cyan-600 to-cyan-400",
        },
    ]

    useEffect(() => {
        if (isVisible) {
            controls.start("visible")
        }

        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isVisible, controls, features.length])

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#000a20] pt-20">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000a20] via-[#001045] to-[#000a20] opacity-80"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiLz48cGF0aCBkPSJNMCA0MEw0MCAwIi8+PHBhdGggZD0iTTAgMjBMMjAgMCIvPjxwYXRoIGQ9Ik0yMCA2MEw2MCAyMCIvPjxwYXRoIGQ9Ik00MCA2MEw2MCA0MCIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 py-8 lg:py-16">
                    {/* Left content column */}
                    <motion.div
                        ref={containerRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="w-full lg:w-5/12"
                    >
                        {/* Headline */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                The Ultimate
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                                    AI Platform
                                </span>
                            </h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "270px" }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2"
                            />
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12">
                            One subscription. 50+ AI models. Unlimited possibilities.
                        </motion.p>

                        {/* Feature tabs */}
                        <motion.div variants={itemVariants} className="mb-10">
                            <div className="bg-[#00102a]/80 backdrop-blur-sm border border-[#1a2747] rounded-xl p-6 overflow-hidden">
                                <div className="flex mb-4 bg-[#0a1530] rounded-lg p-1">
                                    {["50+ AI Models", "Unified Interface", "Advanced Capabilities"].map((tab, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFeature(index)}
                                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${activeFeature === index ? "bg-[#0055ff] text-white" : "text-gray-400 hover:text-gray-300"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative h-[180px]">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: activeFeature === index ? 1 : 0,
                                                x: activeFeature === index ? 0 : 20,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`absolute inset-0 ${activeFeature !== index ? "pointer-events-none" : ""}`}
                                        >
                                            <div className="flex items-start mb-4">
                                                <div className={`w-12 h-12 rounded-xl bg-[#2a3559] flex items-center justify-center mr-4`}>
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                                                    <p className="text-gray-300 text-sm">
                                                        One consistent experience across all AI assistants and tools
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-6 space-y-2">
                                                {[
                                                    "No switching between platforms",
                                                    "Consistent experience across models",
                                                    "Single API for all your needs",
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center">
                                                        <div className="w-5 h-5 text-blue-400 mr-3">
                                                            <Check className="w-5 h-5" />
                                                        </div>
                                                        <span className="text-gray-300 text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right device mockup column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="w-full lg:w-6/12 flex justify-center lg:justify-end"
                    >
                        <motion.div variants={itemVariants} className="relative">
                            {/* Device mockup */}
                            <div className="relative w-full max-w-[600px]">
                                <div className="relative bg-[#0a1530] rounded-2xl border border-[#1a2747] overflow-hidden shadow-2xl">
                                    {/* Device header */}
                                    <div className="bg-[#0a1530] px-4 py-2 flex items-center gap-1 border-b border-[#1a2747]">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                    </div>

                                    {/* App interface */}
                                    <div className="p-6">
                                        {/* Chat interface */}
                                        <div className="bg-[#0a1530] rounded-xl border border-[#1a2747] p-4 mb-6">
                                            <div className="flex items-center mb-6">
                                                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                                                    <svg viewBox="0 0 100 100" className="w-5 h-5">
                                                        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#FFFFFF" strokeWidth="0" />
                                                    </svg>
                                                </div>
                                                <div className="h-2.5 w-24 bg-gray-700 rounded-full"></div>
                                            </div>

                                            <div className="space-y-4">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1.2 }}
                                                    className="ml-auto max-w-[80%] bg-blue-600 rounded-tl-xl rounded-bl-xl rounded-tr-xl p-3"
                                                >
                                                    <p className="text-white text-sm">Generate a creative story about a space explorer</p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 1.8 }}
                                                    className="flex items-start max-w-[80%]"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-purple-600 flex-shrink-0 mr-2 mt-1"></div>
                                                    <div className="bg-[#1a2747] rounded-tr-xl rounded-br-xl rounded-bl-xl p-3">
                                                        <p className="text-white text-sm">
                                                            Captain Elara drifted through the nebula, her ship&apos;s sensors detecting an anomaly unlike
                                                            anything recorded in the galactic archives...
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Input area */}
                                            <div className="mt-4 bg-[#1a2747] rounded-xl p-3 flex items-center">
                                                <div className="flex-grow">
                                                    <div className="h-2 w-32 bg-gray-700 rounded-full"></div>
                                                </div>
                                                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Model selection */}
                                        <div className="grid grid-cols-4 gap-3">
                                            {[
                                                { name: "ChatGPT", color: "bg-blue-600" },
                                                { name: "Claude", color: "bg-purple-600" },
                                                { name: "Gemini", color: "bg-cyan-600" },
                                                { name: "DALL-E", color: "bg-pink-600" },
                                            ].map((model, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 1 + i * 0.1 }}
                                                    className={`bg-[#1a2747] rounded-xl p-3 flex flex-col items-center ${i === 0 ? "ring-2 ring-blue-500" : ""}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg mb-2 ${model.color}`}></div>
                                                    <div className="h-2 w-12 bg-gray-700 rounded-full"></div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="absolute -top-10 -left-10 w-16 h-16"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                        }}
                                        className="w-full h-full rounded-xl bg-blue-600 p-4 flex items-center justify-center shadow-lg"
                                    >
                                        <Brain className="w-8 h-8 text-white" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.9 }}
                                    className="absolute -bottom-5 right-20 w-14 h-14"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                            delay: 2,
                                        }}
                                        className="w-full h-full rounded-xl bg-cyan-600 p-3 flex items-center justify-center shadow-lg"
                                    >
                                        <Zap className="w-7 h-7 text-white" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

