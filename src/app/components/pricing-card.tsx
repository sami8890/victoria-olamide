"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PricingCardProps {
    name: string
    price: string
    period: string
    description: string
    features: string[]
    cta: string
    popular?: boolean
}

export default function PricingCard({
    name,
    price,
    period,
    description,
    features,
    cta,
    popular = false,
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            {popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                </div>
            )}

            <div
                className={`relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border ${popular ? "border-blue-500/50" : "border-white/10"} h-full flex flex-col`}
            >
                {popular && (
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 -z-10"></div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                <p className="text-gray-400 text-sm mb-6">{description}</p>

                <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    <span className="text-gray-400">{period}</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                    {features.map((feature, i) => (
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
                    className={`w-full py-3 rounded-lg font-medium ${popular
                            ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                            : "bg-white/10 text-white hover:bg-white/15"
                        } transition-all`}
                >
                    {cta}
                </motion.button>
            </div>
        </motion.div>
    )
}

