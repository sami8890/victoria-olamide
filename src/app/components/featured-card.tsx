"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
    compact?: boolean
}

export default function FeatureCard({ icon, title, description, compact = false }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
            <div
                className={`relative bg-black/40 backdrop-blur-sm ${compact ? "p-5" : "p-6"} rounded-xl border border-white/10 h-full hover:border-blue-500/50 transition-all`}
            >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-3 rounded-xl inline-block mb-4">
                    {icon}
                </div>
                <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold text-white mb-2`}>{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </motion.div>
    )
}

