import Link from "next/link"

export default function Footer() {
    return (
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
    )
}

