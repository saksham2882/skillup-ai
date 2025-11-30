"use client"

import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Working from "./Working";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";


export default function LandingPage() {

    return (
        <div className="bg-slate-900 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white">
            <Navbar />
            <HeroSection />
            <Features />
            <Working />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}
