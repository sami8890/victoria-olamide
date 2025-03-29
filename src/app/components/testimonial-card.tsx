"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
    name: string
    role: string
    company: string
    quote: string
    rating: number
    avatar?: string
}

export default function TestimonialCard({
    name,
    role,
    company,
    quote,
    rating,
    avatar = "/placeholder.svg?height=80&width=80",
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                            src={avatar || "/placeholder.svg"}
                            alt={`Profile photo of ${name}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="text-sm text-gray-400">
                        {role}, {company}
                    </p>
                </div>
            </div>

            <p className="text-gray-300 mb-4">&quot;{quote}&quot;</p>

            <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
                ))}
            </div>
        </motion.div>
    )
}

