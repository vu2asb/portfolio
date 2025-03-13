import React from 'react';
import Heading from "../components/Heading";


const About = () => {
    return (
        <section id="myAbout" className="container mx-auto py-10 px-4">
            <Heading title="About Me" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-xl text-slate-800">

                <div>
                    <img className="w-[800px]" src="/headshot-enhanced.png" alt="about me image" />
                </div>

                <div>
                    <div className="mt-5 mb-2">
                        <span className="font-bold text-[22px]">
                            Introduction -
                        </span>
                        <span>
                            As an IT consultant with over 30 years of experience, I specialize in empowering owners of small to medium-sized software companies to achieve sustainable growth and operational excellence. My work focuses on three key areas:
                        </span>

                    </div>

                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="font-bold">
                                Boosting Business Performance -
                            </span>
                            <span>
                                I optimize operational systems to enhance critical performance metrics.
                            </span>

                        </div>

                        <div>
                            <span className="font-bold">
                                Streamlining Software Delivery -
                            </span>
                            <span>
                                I help clients overcome challenges in software delivery management with effective strategies.
                            </span>
                        </div>
                        <div>
                            <span className="font-bold">
                                Unlocking Full Potential -
                            </span>
                            <span>
                                Through coaching, mentoring, guidance, and training, I enable business leaders to maximize their capabilities.
                            </span>

                        </div>

                    </div>
                    <div className="mt-5">
                        <span className="font-bold text-[22px]">
                            Professional Background - 
                        </span>
                        <span>
                            I have held senior delivery leadership roles at industry-leading organizations, including Dell, Perot Systems, HPS, and CMC Ltd. (now part of TCS), as well as various small and medium-sized software firms. This diverse experience equips me to understand and address the unique challenges faced by businesses of all sizes.
                        </span>
                    </div>
                    <div className="mt-5">
                        <span className="font-bold text-[22px]">
                            Beyond Work - 
                        </span>
                        <span>
                            When I’m not working, I enjoy exploring electronics as a hobby, watching documentaries, savoring street food, and traveling to new destinations.

                        </span>
                    </div>
                    <div>
                        <a href="#myServices" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Know More ...</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
