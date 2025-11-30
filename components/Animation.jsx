import { motion } from "framer-motion";

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: delay * 0.1, ease: "easeOut" },
    }),
};

export const floatAnimation = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const pulseAnimation = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};


export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};


export const Slide = ({ children, className = "" }) => (
    <section className={`slide-container ${className}`}>
        {children}
    </section>
);


export const AnimatedSection = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={delay}
        variants={fadeInUp}
        className={className}
    >
        {children}
    </motion.div>
);
