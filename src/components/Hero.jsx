"use client";

import MyButton from "../components/MyButton"
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

// https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://www.npmjs.com/package/react-simple-typewriter
const Hero = () => {
    return (
        <div className='bg-[url("/office.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center relative'>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-slate-100 p-[8vw]">
                <div>
                    <h1 className="text-5xl font-bold">I'm Ashok Singh</h1>
                    <h4 className="mt-2 text-2xl">
                        <Typewriter
                            // words={["Hello, World!", "Welcome to Next.js!", "Tailwind is awesome!"]}
                            words={["Global Delivery", "Outsourcing", "Quality and Operational Excellence", "Cost Optimization", "Process Design and Optimization", "Delivery Transformation", "Turnaround Management", "Performance Metrics Enhancement", "Revenue Growth", "Global Competency Center (GCC)", "Delivery Capability Assessment", "Enabling Startups"]}
                            loop={0} // Infinite loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h4>
                </div>
                <div className="h-[2px] w-[40px] mt-6"></div>
                <div className="mt-4 text-xl">
                    <p>
                        Software Delivery Management
                    </p>                    <div>
                        <a href="#myContactUs" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Get Your Free Delivery Capability Assessment Now!</a>
                    </div>
                    <div>
                        <a href="#myAbout" className="btn bg-lime-800 text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-lime-800 hover:bg-transparent hover:text-green-800 transition duration-200">Know More ...</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
