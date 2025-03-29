"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
    ChevronRight,
    Sparkles,
    Zap,
    Globe,
    Brain,
    Shield,
    CreditCard,
    Users,
    Check,
    Star,
    Lock,
    BarChart3,
    MessageSquare,
    ImageIcon,
    Code,
    FileText,
    Music,
    Video,
    Search,
    ShoppingCart,
    Headphones,
    PieChart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Custom animated counter component
const Counter: React.FC<{ from?: number; to: number; duration?: number; delay?: number }> = ({ from = 0, to, duration = 2, delay = 0 }) => {
    const [count, setCount] = useState(from)
    const nodeRef = useRef(null)
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

    useEffect(() => {
        if (!isInView) return

        let startTime: number | undefined
        let animationFrame: number

        interface AnimationParams {
            timestamp: number;
        }

        const startAnimation = (timestamp: AnimationParams["timestamp"]) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const currentCount = Math.floor(from + progress * (to - from));

            setCount(currentCount);

            if (progress < 1) {
            animationFrame = requestAnimationFrame(startAnimation);
            }
        };

        const timeoutId = setTimeout(() => {
            animationFrame = requestAnimationFrame(startAnimation)
        }, delay * 1000)

        return () => {
            clearTimeout(timeoutId)
            cancelAnimationFrame(animationFrame)
        }
    }, [from, to, duration, delay, isInView])

    return <span ref={nodeRef}>{count}</span>
}

export default function FullLandingPage() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Refs for scroll animations
    const welcomeRef = useRef(null)
    const featuresRef = useRef(null)
    const revolutionaryRef = useRef(null)
    const privacyRef = useRef(null)
    const statsRef = useRef(null)
    const paymentRef = useRef(null)
    const pricingRef = useRef(null)
    const testimonialsRef = useRef(null)
    const useCasesRef = useRef(null)

    // InView states
    const welcomeInView = useInView(welcomeRef, { once: true, margin: "-100px" })
    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
    const revolutionaryInView = useInView(revolutionaryRef, { once: true, margin: "-100px" })
    const privacyInView = useInView(privacyRef, { once: true, margin: "-100px" })
    const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
    const paymentInView = useInView(paymentRef, { once: true, margin: "-100px" })
    const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" })
    const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })
    const useCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" })

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-black via-[#0a0a20] to-black">
            {/* Animated background elements */}
            <div className="fixed inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
            </div>

            {/* Grid pattern overlay */}
            <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiLz48cGF0aCBkPSJNMCA0MEw0MCAwIi8+PHBhdGggZD0iTTAgMjBMMjAgMCIvPjxwYXRoIGQ9Ik0yMCA2MEw2MCAyMCIvPjxwYXRoIGQ9Ik00MCA2MEw2MCA0MCIvPjwvZz48L2c+PC9zdmc+')] opacity-10 pointer-events-none" />

            {/* Header/Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
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
                        <span className="text-white text-xl font-bold">
                            ViewOn
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">.AI</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {["Home", "Pricing", "About", "FAQ"].map((item, i) => (
                            <Link key={i} href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="text-gray-300 hover:text-white transition-colors text-sm hidden sm:block">
                            Sign In
                        </button>
                        <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white text-sm font-medium">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen pt-20 flex items-center">
                <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none" />
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
                                    <path
                                        d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                                        fill="#0066FF"
                                        stroke="#4D94FF"
                                        strokeWidth="2"
                                    />
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
            </section>

            {/* Welcome Section with Device Mockup */}
            <section ref={welcomeRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: welcomeInView ? 1 : 0, y: welcomeInView ? 0 : 40 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Welcome to{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                ViewOn.AI
                            </span>
                            , your
                            <br />
                            one-stop platform for accessing leading AI assistants.
                            <br />
                            All in one place
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: welcomeInView ? 1 : 0, scale: welcomeInView ? 1 : 0.9 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative z-10 max-w-lg mx-auto"
                        >
                            {/* Tablet mockup */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30"></div>
                                <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-3xl border-4 border-gray-800 overflow-hidden">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                                    <div className="pt-4 pb-2 px-2 bg-gradient-to-b from-[#0a0a20] to-black rounded-2xl overflow-hidden">
                                        {/* App UI */}
                                        <div className="flex items-center justify-between mb-4 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                                                    <svg viewBox="0 0 100 100" className="w-4 h-4">
                                                        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#FFFFFF" strokeWidth="0" />
                                                    </svg>
                                                </div>
                                                <span className="text-white text-sm font-bold">ViewOn.AI</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 p-2">
                                            {Array.from({ length: 6 }).map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: welcomeInView ? 1 : 0,
                                                        y: welcomeInView ? 0 : 20,
                                                    }}
                                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                    className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50"
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-lg mb-2 bg-gradient-to-br ${i % 3 === 0
                                                                ? "from-blue-400 to-blue-600"
                                                                : i % 3 === 1
                                                                    ? "from-purple-400 to-purple-600"
                                                                    : "from-cyan-400 to-cyan-600"
                                                            }`}
                                                    ></div>
                                                    <div className="h-2 w-16 bg-gray-600 rounded-full mb-1"></div>
                                                    <div className="h-2 w-10 bg-gray-700 rounded-full"></div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="mt-4 p-2">
                                            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="h-2 w-20 bg-gray-600 rounded-full"></div>
                                                    <div className="h-2 w-8 bg-blue-500 rounded-full"></div>
                                                </div>
                                                <div className="h-24 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg border border-gray-700/30"></div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex justify-between px-4 py-2 bg-gray-900/50 rounded-xl">
                                            {["Home", "Search", "Favorites", "Settings"].map((item, i) => (
                                                <div key={i} className="flex flex-col items-center">
                                                    <div className={`w-6 h-6 rounded-full ${i === 0 ? "bg-blue-500" : "bg-gray-700"}`}></div>
                                                    <div className="h-1 w-4 mt-1 bg-gray-600 rounded-full"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating AI model icons */}
                            {[
                                { top: "10%", left: "-15%", delay: 0.8, color: "from-blue-400 to-blue-600" },
                                { top: "60%", left: "-20%", delay: 1.0, color: "from-purple-400 to-purple-600" },
                                { top: "20%", right: "-15%", delay: 1.2, color: "from-cyan-400 to-cyan-600" },
                                { top: "70%", right: "-20%", delay: 1.4, color: "from-blue-400 to-blue-600" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: welcomeInView ? 1 : 0,
                                        scale: welcomeInView ? 1 : 0,
                                        x: welcomeInView ? [0, 10, 0] : 0,
                                        y: welcomeInView ? [0, -10, 0] : 0,
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: item.delay,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                    className="absolute w-16 h-16"
                                    style={{
                                        top: item.top,
                                        left: item.left,
                                        right: item.right,
                                    }}
                                >
                                    <div
                                        className={`w-full h-full rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/20 p-3 flex items-center justify-center`}
                                    >
                                        <div className="w-8 h-8 bg-white/20 rounded-md"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                        {[
                            {
                                icon: <Brain className="w-8 h-8 text-blue-400" />,
                                title: "Explore and utilize AI technology",
                                description:
                                    "Get access to the most advanced AI models and tools, all in one unified platform with seamless integration.",
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-purple-400" />,
                                title: "Unified interface for all models",
                                description:
                                    "No more switching between different platforms. Access all your favorite AI assistants through our intuitive interface.",
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                                title: "Security and privacy",
                                description:
                                    "Your data is protected with enterprise-grade security. We prioritize your privacy with advanced encryption.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: featuresInView ? 1 : 0,
                                    y: featuresInView ? 0 : 30,
                                }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                className="relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
                                <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-3 rounded-xl inline-block mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Revolutionary Platform Section */}
            <section ref={revolutionaryRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: revolutionaryInView ? 1 : 0,
                            y: revolutionaryInView ? 0 : 30,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            ViewOn.AI is a revolutionary platform
                            <br />
                            that gives you access to a large
                            <br />
                            number of the{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                best AI models
                            </span>{" "}
                            available.
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
                                title: "Multi-Language Support",
                                description: "Communicate in over 100 languages with our AI assistants.",
                            },
                            {
                                icon: <ImageIcon className="w-8 h-8 text-purple-400" />,
                                title: "Image Generation",
                                description: "Create stunning visuals with our advanced image generation models.",
                            },
                            {
                                icon: <Code className="w-8 h-8 text-cyan-400" />,
                                title: "Code Assistance",
                                description: "Get help with coding in multiple programming languages.",
                            },
                            {
                                icon: <FileText className="w-8 h-8 text-blue-400" />,
                                title: "Document Analysis",
                                description: "Extract insights from documents with our AI-powered analysis.",
                            },
                            {
                                icon: <Music className="w-8 h-8 text-purple-400" />,
                                title: "Audio Generation",
                                description: "Create music and audio content with our AI models.",
                            },
                            {
                                icon: <Video className="w-8 h-8 text-cyan-400" />,
                                title: "Video Enhancement",
                                description: "Enhance and edit videos with AI-powered tools.",
                            },
                            {
                                icon: <Search className="w-8 h-8 text-blue-400" />,
                                title: "Research Assistant",
                                description: "Get help with research and information gathering.",
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
                                title: "Data Analysis",
                                description: "Analyze and visualize data with our AI-powered tools.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: revolutionaryInView ? 1 : 0,
                                    y: revolutionaryInView ? 0 : 30,
                                }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
                            >
                                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-3 rounded-xl inline-block mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section ref={privacyRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{
                                opacity: privacyInView ? 1 : 0,
                                x: privacyInView ? 0 : -30,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                Security First
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Your Privacy in
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                    ViewOn.AI
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-6">
                                We take your privacy seriously. All your data is encrypted and protected with enterprise-grade security.
                                We never share your personal information with third parties without your explicit consent.
                            </p>
                            <p className="text-gray-300 mb-8">
                                Our platform is designed with privacy at its core, ensuring that your interactions with AI models remain
                                confidential and secure. We comply with global data protection regulations to provide you with peace of
                                mind.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Lock className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-gray-300">GDPR Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-gray-300">End-to-End Encryption</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{
                                opacity: privacyInView ? 1 : 0,
                                x: privacyInView ? 0 : 30,
                            }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-8 h-8 text-blue-400" />
                                    <h3 className="text-xl font-bold text-white">Privacy Features</h3>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Data encryption at rest and in transit",
                                        "No data sharing with third parties",
                                        "Option to delete your data anytime",
                                        "Transparent privacy policy",
                                        "Regular security audits",
                                    ].map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: privacyInView ? 1 : 0,
                                                x: privacyInView ? 0 : 20,
                                            }}
                                            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-blue-400" />
                                            </div>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-400"></div>
                                    </div>
                                    <span className="text-xs text-gray-400">Powered by advanced encryption</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section ref={statsRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{
                                opacity: statsInView ? 1 : 0,
                                x: statsInView ? 0 : -30,
                            }}
                            transition={{ duration: 0.6 }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold text-white">Platform Statistics</h3>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-400">Active Users</span>
                                            <span className="text-sm font-bold text-white">
                                                <Counter from={0} to={84} />
                                                k+
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: statsInView ? "84%" : 0 }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-400">AI Models</span>
                                            <span className="text-sm font-bold text-white">
                                                <Counter from={0} to={50} />+
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: statsInView ? "50%" : 0 }}
                                                transition={{ duration: 1, delay: 0.7 }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-400"
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-400">Daily Queries</span>
                                            <span className="text-sm font-bold text-white">
                                                <Counter from={0} to={2} />
                                                M+
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: statsInView ? "75%" : 0 }}
                                                transition={{ duration: 1, delay: 0.9 }}
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-400"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 grid grid-cols-3 gap-4">
                                    {[
                                        { label: "Countries", value: "120+" },
                                        { label: "Languages", value: "40+" },
                                        { label: "Satisfaction", value: "97%" },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: statsInView ? 1 : 0,
                                                y: statsInView ? 0 : 20,
                                            }}
                                            transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                                            className="bg-white/5 rounded-lg p-3 text-center"
                                        >
                                            <div className="text-lg font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-gray-400">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{
                                opacity: statsInView ? 1 : 0,
                                x: statsInView ? 0 : 30,
                            }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 md:order-2"
                        >
                            <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                Platform Metrics
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Stability AI helps
                                <br />
                                you customize
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                    your AI use
                                </span>
                            </h2>
                            <p className="text-gray-300 mb-6">
                                Our platform is designed to be flexible and adaptable to your needs. Whether you're a developer,
                                business, or individual user, we provide the tools and resources to customize your AI experience.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: <ShoppingCart className="w-4 h-4 text-blue-400" />, label: "E-commerce" },
                                    { icon: <Headphones className="w-4 h-4 text-purple-400" />, label: "Customer Support" },
                                    { icon: <PieChart className="w-4 h-4 text-cyan-400" />, label: "Data Analysis" },
                                    { icon: <FileText className="w-4 h-4 text-blue-400" />, label: "Content Creation" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                                        <span className="text-sm text-gray-300">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-300">
                                ViewOn.AI is trusted by users across 120 countries around the globe, with industry-leading satisfaction
                                rates and continuous improvement based on user feedback.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Payment Methods Section */}
            <section ref={paymentRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: paymentInView ? 1 : 0,
                            y: paymentInView ? 0 : 30,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Methods</h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            We offer multiple payment options to make it easy for you to subscribe to our platform.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Credit Card",
                                description: "Pay securely with your credit card",
                                icon: <CreditCard className="w-8 h-8 text-blue-400" />,
                            },
                            {
                                name: "PayPal",
                                description: "Fast and secure payments with PayPal",
                                icon: <Globe className="w-8 h-8 text-purple-400" />,
                            },
                            {
                                name: "Apple Pay",
                                description: "Quick checkout with Apple Pay",
                                icon: <Zap className="w-8 h-8 text-cyan-400" />,
                            },
                        ].map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: paymentInView ? 1 : 0,
                                    y: paymentInView ? 0 : 30,
                                }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
                            >
                                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 rounded-xl inline-block mb-4">
                                    {method.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{method.name}</h3>
                                <p className="text-gray-300 mb-4">{method.description}</p>
                                <div className="text-xs text-gray-400">* No additional processing fees</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section ref={pricingRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: pricingInView ? 1 : 0,
                            y: pricingInView ? 0 : 30,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing</h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Choose the plan that works best for you. All plans include access to our platform and AI models.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                        {[
                            {
                                name: "Free Plan",
                                price: "€0",
                                period: "/month",
                                description: "Perfect for trying out the platform",
                                features: ["Access to 5 AI models", "100 queries per day", "Basic support", "No credit card required"],
                                cta: "Get Started",
                                popular: false,
                                delay: 0,
                            },
                            {
                                name: "Professional",
                                price: "€9.90",
                                period: "/month",
                                description: "Ideal for individuals and small teams",
                                features: [
                                    "Access to 30 AI models",
                                    "1,000 queries per day",
                                    "Priority support",
                                    "Advanced features",
                                    "API access",
                                    "No ads",
                                ],
                                cta: "Get Started",
                                popular: true,
                                delay: 0.2,
                            },
                            {
                                name: "Premium Plan",
                                price: "€14.90",
                                period: "/month",
                                description: "For businesses with advanced needs",
                                features: [
                                    "Access to all 50+ AI models",
                                    "Unlimited queries",
                                    "24/7 priority support",
                                    "All advanced features",
                                    "Full API access",
                                    "Custom integrations",
                                    "Team management",
                                ],
                                cta: "Get Started",
                                popular: false,
                                delay: 0.4,
                            },
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: pricingInView ? 1 : 0,
                                    y: pricingInView ? 0 : 30,
                                }}
                                transition={{ duration: 0.6, delay: plan.delay }}
                                className="relative"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div
                                    className={`relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? "border-blue-500/50" : "border-white/10"} h-full flex flex-col`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 -z-10"></div>
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400">{plan.period}</span>
                                    </div>

                                    <div className="space-y-3 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-blue-400" />
                                                </div>
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-3 rounded-lg font-medium ${plan.popular
                                                ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                                                : "bg-white/10 text-white hover:bg-white/15"
                                            } transition-all`}
                                    >
                                        {plan.cta}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section ref={testimonialsRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: testimonialsInView ? 1 : 0,
                            y: testimonialsInView ? 0 : 30,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted By ViewOn.AI Clients</h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Product Manager",
                                company: "TechCorp",
                                avatar: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "ViewOn.AI has transformed how we interact with AI models. The unified platform saves us time and resources.",
                                rating: 5,
                            },
                            {
                                name: "Michael Chen",
                                role: "Software Developer",
                                company: "DevStudio",
                                avatar: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "The API integration is seamless, and the variety of AI models available is impressive. Highly recommended!",
                                rating: 5,
                            },
                            {
                                name: "Jessica Smith",
                                role: "Marketing Director",
                                company: "CreativeEdge",
                                avatar: "/placeholder.svg?height=80&width=80",
                                quote:
                                    "ViewOn.AI has revolutionized our content creation process. The AI models are incredibly versatile and accurate.",
                                rating: 4,
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: testimonialsInView ? 1 : 0,
                                    y: testimonialsInView ? 0 : 30,
                                }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatar || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section ref={useCasesRef} className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: useCasesInView ? 1 : 0,
                            y: useCasesInView ? 0 : 30,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">For Every Use Case</h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            ViewOn.AI is designed to be versatile and adaptable to a wide range of use cases.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{
                                opacity: useCasesInView ? 1 : 0,
                                x: useCasesInView ? 0 : -30,
                            }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { icon: <MessageSquare className="w-6 h-6 text-blue-400" />, label: "Customer Support" },
                                { icon: <FileText className="w-6 h-6 text-purple-400" />, label: "Content Creation" },
                                { icon: <Code className="w-6 h-6 text-cyan-400" />, label: "Development" },
                                { icon: <Search className="w-6 h-6 text-blue-400" />, label: "Research" },
                                { icon: <ShoppingCart className="w-6 h-6 text-purple-400" />, label: "E-commerce" },
                                { icon: <BarChart3 className="w-6 h-6 text-cyan-400" />, label: "Analytics" },
                                { icon: <Users className="w-6 h-6 text-blue-400" />, label: "HR & Recruitment" },
                                { icon: <Brain className="w-6 h-6 text-purple-400" />, label: "Education" },
                            ].map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: useCasesInView ? 1 : 0,
                                        scale: useCasesInView ? 1 : 0.9,
                                    }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center gap-2 hover:border-blue-500/50 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                                        {useCase.icon}
                                    </div>
                                    <span className="text-sm text-gray-300">{useCase.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{
                                opacity: useCasesInView ? 1 : 0,
                                x: useCasesInView ? 0 : 30,
                            }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">AI-Powered Solutions</h3>
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        Our platform provides AI-powered solutions for a wide range of industries and use cases. From
                                        customer support to content creation, we have the tools and models to help you succeed.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {[
                                            { label: "Increased Efficiency", value: "85%" },
                                            { label: "Cost Reduction", value: "40%" },
                                            { label: "Customer Satisfaction", value: "92%" },
                                            { label: "Time Saved", value: "65%" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/5 rounded-lg p-3">
                                                <div className="text-lg font-bold text-white">{stat.value}</div>
                                                <div className="text-xs text-gray-400">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white font-medium"
                                    >
                                        Explore Use Cases
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="relative w-8 h-8">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path
                                            d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                                            fill="#0066FF"
                                            stroke="#4D94FF"
                                            strokeWidth="2"
                                        />
                                        <path d="M40 40 L60 40 L70 60 L50 70 L30 60 Z" fill="#FFFFFF" stroke="#4D94FF" strokeWidth="1" />
                                    </svg>
                                </div>
                                <span className="text-white text-xl font-bold">
                                    ViewOn
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">.AI</span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                Your gateway to 50+ leading AI assistants, all unified in a seamless experience.
                            </p>
                            <div className="flex gap-4">
                                {["Twitter", "Instagram", "GitHub", "LinkedIn"].map((social, i) => (
                                    <Link key={i} href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                                        {social}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {[
                            {
                                title: "Resources",
                                links: ["Documentation", "Tutorials", "Blog", "API Reference"],
                            },
                            {
                                title: "Company",
                                links: ["About Us", "Careers", "Contact", "Press Kit"],
                            },
                            {
                                title: "Legal",
                                links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"],
                            },
                        ].map((column, i) => (
                            <div key={i}>
                                <h3 className="text-white font-bold mb-4">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, j) => (
                                        <li key={j}>
                                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">© {new Date().getFullYear()} ViewOn.AI. All rights reserved.</div>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                                Terms
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                                Privacy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

