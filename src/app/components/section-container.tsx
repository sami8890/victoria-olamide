"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionContainerProps {
    title: string
    subtitle?: string
    children: React.ReactNode
    className?: string
}

export default function SectionContainer({ title, subtitle, children, className = "" }: SectionContainerProps) {
    return (
        <section className={`py-24 relative z-10 ${className}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                    {subtitle && (
                        <>
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
                            <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
                        </>
                    )}
                </motion.div>

                {children}
            </div>
        </section>
    )
}

