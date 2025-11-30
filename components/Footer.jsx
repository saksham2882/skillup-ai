import { footerData, iconMap } from "@/lib/landing-data";
import { Brain, ExternalLink, Link2, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/landButton";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer className="border-t border-white/10 bg-slate-950 pt-20 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
                            <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <Brain className="text-white w-5 h-5" />
                            </div>
                            <span className="text-white">SkillUp AI</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering the next generation of learners with adaptive
                            intelligence and personalized curriculums.
                        </p>
                        <div className="flex gap-4">
                            {footerData.social.map((item, idx) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <div
                                        key={idx}
                                        className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer"
                                    >
                                        <Link href={item.link}>
                                            <Icon size={18} />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {footerData.menu1.map((item, idx) => (
                                <li key={idx} className="hover:text-cyan-500 cursor-pointer transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {footerData.menu2.map((item, idx) => (
                                <li key={idx} className="hover:text-cyan-500 cursor-pointer transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Get the latest AI learning trends delivered to your inbox.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                                    size={16}
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <Button
                                variant="primary"
                                className="w-full! py-2! text-sm! justify-center"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-500">
                    <div>Copyright &copy; {year} SkillUp AI Inc. All rights reserved.</div>
                    <div className="flex gap-8">
                        {footerData.policies.map((policy, idx) => (
                            <span
                                key={idx}
                                className="hover:text-white cursor-pointer transition-colors"
                            >
                                {policy}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
                    created by {" "}
                    <Link 
                        href={'https://saksham-agrahari.vercel.app'}
                        className="flex gap-1 items-center justify-center ml-1 hover:text-cyan-400"
                    >
                        <ExternalLink size={14}/> Saksham Agrahari
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer