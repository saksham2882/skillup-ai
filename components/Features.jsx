import { features } from "@/lib/landing-data"
import { AnimatedSection, fadeInUp, Slide, staggerContainer } from "./Animation"
import { motion } from "framer-motion"

const Features = () => {
    return (
        <>
            <div id="slide-1">
                <Slide className="bg-slate-950">
                    <div className="container mx-auto px-6 py-30">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-xs">
                                    Intelligence meets Education
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    SKillUp AI isn&apos;t just a video library. It&apos;s a living,
                                    breathing educational engine that grows with you.
                                </p>
                            </div>
                        </AnimatedSection>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    className="feature-card group"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default Features