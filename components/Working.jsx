import { working } from "@/lib/landing-data";
import { AnimatedSection, fadeInUp, Slide, staggerContainer } from "./Animation";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const Working = () => {
    return (
        <>
            <div id="slide-2">
                <Slide className="bg-slate-900 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

                    <div className="container mx-auto px-6 relative z-10 mt-20 mb-20">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <motion.div
                                    className="relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                >
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute left-[22px] top-2 bottom-8 w-1 bg-linear-to-b from-cyan-500 to-slate-800 rounded-full"
                                    />

                                    {working.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={fadeInUp}
                                            className="relative pl-16 py-6 group cursor-default"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: 0.2 + idx * 0.2, type: "spring" }}
                                                className="absolute left-6 top-8 w-5 h-5 -ml-2.5 bg-slate-900 border-4 border-slate-700 rounded-full group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300 z-10"
                                            />
                                            <span className="text-5xl font-bold text-slate-800 absolute -top-2 right-0 select-none group-hover:text-slate-700 transition-colors">
                                                {item.step}
                                            </span>
                                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-400">{item.text}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            <AnimatedSection className="order-1 md:order-2 text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                    Your Journey to 
                                    <br className="mt-2" />
                                    <span className="bg-linear-to-b from-cyan-100 to-cyan-500 text-transparent bg-clip-text">
                                        Expertise
                                    </span> 
                                </h2>
                                <p className="text-xl text-slate-400 mb-8">
                                    Traditional learning is linear. SkillUp AI is non-linear and
                                    multidimensional, just like your brain.
                                </p>
                                <div className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-white/10 shadow-xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400">
                                                Average Improvement
                                            </div>
                                            <div className="text-2xl font-bold text-white">
                                                3.5x Faster
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeOut",
                                                delay: 0.5,
                                            }}
                                            className="h-full bg-linear-to-r from-cyan-500 to-blue-600"
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>Traditional</span>
                                        <span>SkillUp AI</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    );
}

export default Working