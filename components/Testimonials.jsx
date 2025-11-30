import { testimonials } from "@/lib/landing-data"
import { AnimatedSection, fadeInUp, Slide, staggerContainer } from "./Animation"
import { motion } from "framer-motion"
import { Users } from "lucide-react"

const Testimonials = () => {
    return (
        <div id="slide-3">
            <Slide className="bg-slate-950">
                <div className="container mx-auto px-6 text-center my-30">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-6xl font-bold mb-20 leading-16">
                            Join a{" "}
                            <span className="bg-linear-to-b from-cyan-100 to-cyan-500 text-transparent bg-clip-text">
                                Powerful
                            </span> 
                            <br className="mt-2" />
                            Learning Community
                        </h2>
                    </AnimatedSection>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((user, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className={`testimonial-card ${user.bg}`}
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-slate-400" />
                                    </div>
                                </div>
                                <p className="mt-6 text-lg text-slate-300 italic mb-6">
                                    &ldquo;{user.text}&rdquo;
                                </p>
                                <div className="font-bold text-white">{user.name}</div>
                                <div className="text-sm text-cyan-400">{user.role}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <AnimatedSection delay={5} className="mt-22">
                        <div className="inline-block p-1 rounded-full bg-slate-800/50 border border-white/10">
                            <div className="flex flex-wrap justify-center items-center gap-8 px-8 py-4">
                                <span className="text-2xl font-bold text-slate-500">
                                    Google
                                </span>
                                <span className="text-2xl font-bold text-slate-500">
                                    Microsoft
                                </span>
                                <span className="text-2xl font-bold text-slate-500">
                                    Amazon
                                </span>
                                <span className="text-2xl font-bold text-slate-500">
                                    Meta
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            Shaping careers that reach the world&apos;s best companies
                        </p>
                    </AnimatedSection>
                </div>
            </Slide>
        </div>
    )
}

export default Testimonials