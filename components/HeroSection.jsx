"use client"

import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react";
import { AnimatedSection, floatAnimation, pulseAnimation, Slide } from "./Animation";
import { motion } from "framer-motion";
import { Button } from "./ui/landButton";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter()

    return (
        <>
            <div id="slide-0">
                <Slide className="bg-hero">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            variants={pulseAnimation}
                            animate="animate"
                            className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center mt-32">
                        <div className="space-y-5 text-center md:text-left">
                            <AnimatedSection delay={0}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 text-xs font-semibold mb-4 cursor-default"
                                >
                                    <Sparkles size={16} />
                                    <span>
                                        AI-Powered Learning Revolution
                                    </span>
                                </motion.div>
                            </AnimatedSection>

                            <AnimatedSection delay={1}>
                                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                                    Master Any Skill with <br />
                                    <span className="text-gradient-primary">
                                        Adaptive AI
                                    </span>
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection delay={2}>
                                <p className="text-[16px] text-slate-400 max-w-lg mx-auto md:mx-0">
                                    Stop wasting time on generic courses. Our AI builds a personalized curriculum just for you, adapting in real-time to your pace and goals.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={3}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Button onClick={() => router.push('/sign-in')}>
                                        Start Free Trial <ArrowRight size={20} />
                                    </Button>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={4}>
                                <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-slate-500 text-sm font-medium mb-20">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-cyan-500" /> 1000+ Learners
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-cyan-500" /> 4.5/5 Rating
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>


                        <motion.div
                            variants={floatAnimation}
                            animate="animate"
                            className="relative hidden md:block"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                            <div className="glass-panel">
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">
                                        ai_tutor_v2.0.exe
                                    </div>
                                </div>
                                <div className="space-y-6 font-mono text-sm">
                                    <div className="flex gap-4">
                                        <div className="text-cyan-400 shrink-0">{">"} User:</div>
                                        <div className="text-slate-300">
                                            I want to learn React, but I only have 20 minutes a day.
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-green-400 shrink-0">{">"} AI:</div>
                                        <div className="text-slate-300">
                                            Creating micro-learning path... <br />
                                            <motion.span
                                                animate={{ opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="text-cyan-500"
                                            >
                                                [██████████] 100%
                                            </motion.span>{" "}
                                            <br />
                                            <br />
                                            Here is your customized plan: <br />
                                            1. Chapter 1: Components (Interactive Lab) <br />
                                            2. Chapter 2: State vs Props (Quiz) <br />
                                            3. Chapter 3: Build a Todo App (Project)
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2 }}
                                        className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-300 mt-4"
                                    >
                                        <Zap size={16} className="inline mr-2" />
                                        Detected: You learn best with interactive code snippets.
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Slide>
            </div>
        </>
    );
}

export default HeroSection