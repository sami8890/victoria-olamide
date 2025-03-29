"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/app/components/hero-section"
import SectionContainer from "@/app/components/section-container"
import FeatureCard from "@/app/components/featured-card"
import PricingCard from "@/app/components/pricing-card"
import TestimonialCard from "@/app/components/testimonial-card"
import Footer from "@/app/components/footer"
import {
    Brain,
    Globe,
    Shield,
    MessageSquare,
    Code,
    ImageIcon,
    FileText,
    BarChart3,
    CreditCard,
    Zap,
    Check,
    Search,
    ShoppingCart,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="relative w-full overflow-hidden bg-[#000a20]">
            {/* Header/Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#000a20]/90 backdrop-blur-md border-b border-[#1a2747]">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-5 h-5">
                                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#FFFFFF" strokeWidth="0" />
                            </svg>
                        </div>
                        <span className="text-white text-xl font-bold">
                            ViewOn
                            <span className="text-blue-400">.AI</span>
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
                        <button className="px-4 py-1.5 bg-blue-600 rounded-lg text-white text-sm font-medium">Sign Up</button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <HeroSection isVisible={isVisible} />

            {/* Rest of the sections remain the same */}
            <SectionContainer
                title="Welcome to ViewOn.AI, your one-stop platform for accessing leading AI assistants."
                subtitle="All in one place"
            >
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
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
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
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
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 * i }}
                                className="absolute w-16 h-16"
                                style={{
                                    top: item.top,
                                    left: item.left,
                                    right: item.right,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                    className={`w-full h-full rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/20 p-3 flex items-center justify-center`}
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-md"></div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </SectionContainer>

            {/* Features Section */}
            <SectionContainer title="Powerful Features" subtitle="Designed for your success">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                    <FeatureCard
                        icon={<Brain className="w-8 h-8 text-blue-400" />}
                        title="Explore AI Technology"
                        description="Get access to the most advanced AI models and tools, all in one unified platform with seamless integration."
                    />
                    <FeatureCard
                        icon={<Globe className="w-8 h-8 text-purple-400" />}
                        title="Unified Interface"
                        description="No more switching between different platforms. Access all your favorite AI assistants through our intuitive interface."
                    />
                    <FeatureCard
                        icon={<Shield className="w-8 h-8 text-cyan-400" />}
                        title="Security and Privacy"
                        description="Your data is protected with enterprise-grade security. We prioritize your privacy with advanced encryption."
                    />
                </div>
            </SectionContainer>

            {/* Revolutionary Platform Section */}
            <SectionContainer title="ViewOn.AI is a revolutionary platform" subtitle="Access the best AI models available">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<MessageSquare className="w-8 h-8 text-blue-400" />}
                        title="Multi-Language Support"
                        description="Communicate in over 100 languages with our AI assistants."
                        compact
                    />
                    <FeatureCard
                        icon={<ImageIcon className="w-8 h-8 text-purple-400" />}
                        title="Image Generation"
                        description="Create stunning visuals with our advanced image generation models."
                        compact
                    />
                    <FeatureCard
                        icon={<Code className="w-8 h-8 text-cyan-400" />}
                        title="Code Assistance"
                        description="Get help with coding in multiple programming languages."
                        compact
                    />
                    <FeatureCard
                        icon={<FileText className="w-8 h-8 text-blue-400" />}
                        title="Document Analysis"
                        description="Extract insights from documents with our AI-powered analysis."
                        compact
                    />
                </div>
            </SectionContainer>

            {/* Privacy Section */}
            <SectionContainer title="Your Privacy in ViewOn.AI" subtitle="Security is our priority">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                            Security First
                        </div>
                        <p className="text-gray-300 mb-6">
                            We take your privacy seriously. All your data is encrypted and protected with enterprise-grade security.
                            We never share your personal information with third parties without your explicit consent.
                        </p>
                        <p className="text-gray-300 mb-8">
                            Our platform is designed with privacy at its core, ensuring that your interactions with AI models remain
                            confidential and secure. We comply with global data protection regulations to provide you with peace of
                            mind.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
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
                        </div>
                    </motion.div>
                </div>
            </SectionContainer>

            {/* Pricing Section */}
            <SectionContainer title="Flexible Pricing" subtitle="Choose the plan that works for you">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                    <PricingCard
                        name="Free Plan"
                        price="€0"
                        period="/month"
                        description="Perfect for trying out the platform"
                        features={["Access to 5 AI models", "100 queries per day", "Basic support", "No credit card required"]}
                        cta="Get Started"
                        popular={false}
                    />
                    <PricingCard
                        name="Professional"
                        price="€9.90"
                        period="/month"
                        description="Ideal for individuals and small teams"
                        features={[
                            "Access to 30 AI models",
                            "1,000 queries per day",
                            "Priority support",
                            "Advanced features",
                            "API access",
                            "No ads",
                        ]}
                        cta="Get Started"
                        popular={true}
                    />
                    <PricingCard
                        name="Premium Plan"
                        price="€14.90"
                        period="/month"
                        description="For businesses with advanced needs"
                        features={[
                            "Access to all 50+ AI models",
                            "Unlimited queries",
                            "24/7 priority support",
                            "All advanced features",
                            "Full API access",
                            "Custom integrations",
                            "Team management",
                        ]}
                        cta="Get Started"
                        popular={false}
                    />
                </div>
            </SectionContainer>

            {/* Payment Methods Section */}
            <SectionContainer title="Payment Methods" subtitle="Multiple options for your convenience">
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
            </SectionContainer>

            {/* Testimonials Section */}
            <SectionContainer title="Trusted By ViewOn.AI Clients" subtitle="What our users say">
                <div className="grid md:grid-cols-3 gap-6">
                    <TestimonialCard
                        name="Sarah Johnson"
                        role="Product Manager"
                        company="TechCorp"
                        quote="ViewOn.AI has transformed how we interact with AI models. The unified platform saves us time and resources."
                        rating={5}
                    />
                    <TestimonialCard
                        name="Michael Chen"
                        role="Software Developer"
                        company="DevStudio"
                        quote="The API integration is seamless, and the variety of AI models available is impressive. Highly recommended!"
                        rating={5}
                    />
                    <TestimonialCard
                        name="Jessica Smith"
                        role="Marketing Director"
                        company="CreativeEdge"
                        quote="ViewOn.AI has revolutionized our content creation process. The AI models are incredibly versatile and accurate."
                        rating={4}
                    />
                </div>
            </SectionContainer>

            {/* Use Cases Section */}
            <SectionContainer title="For Every Use Case" subtitle="Versatile solutions for all needs">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <MessageSquare className="w-6 h-6 text-blue-400" />, label: "Customer Support" },
                        { icon: <FileText className="w-6 h-6 text-purple-400" />, label: "Content Creation" },
                        { icon: <Code className="w-6 h-6 text-cyan-400" />, label: "Development" },
                        { icon: <Search className="w-6 h-6 text-blue-400" />, label: "Research" },
                        { icon: <ShoppingCart className="w-6 h-6 text-purple-400" />, label: "E-commerce" },
                        { icon: <BarChart3 className="w-6 h-6 text-cyan-400" />, label: "Analytics" },
                        { icon: <Brain className="w-6 h-6 text-blue-400" />, label: "Education" },
                        { icon: <Globe className="w-6 h-6 text-purple-400" />, label: "Global Access" },
                    ].map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
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
                </div>
            </SectionContainer>

            {/* Footer */}
            <Footer />
        </div>
    )
}

