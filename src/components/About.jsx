import React from 'react';
import Heading from "../components/Heading";
import Image from 'next/image';
import Link from 'next/link';


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


                </div>
                <div>

                    <div className="font-bold text-[22px] mb-10 text-slate-700"> Certifications -</div>

                    <div className="flex items-center pb-2">
                        <Image
                            src="/Dell-Technologies.jpg"
                            width={80}
                            height={80}
                            alt="Logo of Dell Technologies"
                        />
                        <div>
                            <p className="px-5 text-[18px]">CMMI-DEV Level 5 v1.2 </p>
                            <p className="px-5 text-[16px]">Dell Technologies</p>

                        </div>
                    </div>
                    <div className="flex items-center pb-2">
                        <Image
                            src="/kpmg.jpg"
                            width={80}
                            height={80}
                            alt="Logo of Dell Technologies"
                        />
                        <div>
                            <p className="px-5 text-[18px]">Optimizing CMMI - SW (V1.1) Level-5 </p>
                            <p className="px-5 text-[16px]">KPMG India</p>

                        </div>
                    </div>
                    <div className="flex items-center pb-2">
                        <Image
                            src="/Carnegie Mellon University.png"
                            width={80}
                            height={80}
                            alt="Logo of Dell Technologies"
                        />
                        <div>
                            <p className="px-5 text-[18px]">Introduction to CMMI, Staged Representation, v1.1</p>
                            <p className="px-5 text-[16px]">Carnegie Mellon University, Pittsburgh, USA</p>

                        </div>
                    </div>
                    <div className="flex items-center pb-2">
                        <Image
                            src="/ibm.jpg"
                            width={80}
                            height={80}
                            alt="Logo of Dell Technologies"
                        />
                        <div>
                            <p className="px-5 text-[18px]">Getting Started with San Franscisco V1R3 </p>
                            <p className="px-5 text-[16px]">IBM, Rochester, Minesota, USA</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-[22px] mt-8 mb-2 text-slate-700"> Publications -</div>
            <div id="myPublications" className="container mx-auto py-10 px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-xl text-slate-800">
                    <div className="grid place-content-center">
                        <img className="w-[300px]" src="/Red-Book.jpg" alt="Red Book cover image" />
                    </div>
                    <div>
                        <p className="text-[20px] font-semibold">
                            Co-Authored SanFrancisco Framework - Getting Started
                        </p>
                        <br />
                        <p className="text-[18px]">Published by IBM Press Rochester, Minnesota, USA. The San Francisco is an IBM initiative to provide business process components that can form the basis of rapidly developed distributed solutions for mission-critical business applications.
                        </p>
                        <br />
                        <p className="text-[18px]">
                            The goal of IBM’s San Francisco Project is to help application developers modernize their
                            applications by moving to distributed object oriented technology.  To achieve this goal we are
                            providing software that helps them overcome barriers that have prevented them from using object
                            oriented technology.  One barrier is the problem of how to retrain their development staff to be
                            able to effectively use object oriented  technology.  A second barrier is to reduce the risk involved in moving to a new technology.   A third problem that our partners face is the need to be able to
                            rapidly change their applications and to customize them for their customers.
                        </p>

                    </div>
                </div>
                <br />
                <hr className="border-slate-300" />
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-xl text-slate-800">

                    <div>
                        <p className="text-[20px] font-semibold">
                            Frequent Contributor - Electronics For You (EFY) Magazine
                        </p>
                        <br />
                        <p className="text-[18px]">South Asia’s leading electronics magazine, is renowned for its extensive coverage of topics, spanning design, technology trends, and do-it-yourself (DIY) projects. Published in both print and digital formats, it is accessible online at http://www.efymag.com/.
                        </p>
                        <br />


                    </div>
                    <div className="grid place-content-center">
                        <img className="w-[300px]" src="/EFY Oct 2017.png" alt="Udemy course photo" />
                    </div>
                </div>
                <div className="flex items-center pb-2">
                <div>
                        <Link href="http://www.linkedin.com/in/ashok-k-singh" className="text-blue-600 underline">My LinkedIn profile ...</Link>
                    </div>
                    <Link href="http://www.linkedin.com/in/ashok-k-singh">
                        <Image
                            src="/logo-linkedin-4096.png"
                            width={100}
                            height={100}
                            alt="Logo LinkedIn"
                        />
                    </Link>

                </div>
                <div>
                    <a href="#myServices" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Know More ...</a>
                </div>

            </div>

        </section>
    )
}

export default About
