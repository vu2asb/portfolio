import React from 'react'
import Heading from "../components/Heading"
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineHideSource } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { PiCurrencyInrFill } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { TbTransform } from "react-icons/tb";
import { RiArrowTurnBackFill } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { GrGrow } from "react-icons/gr";
import { SiManageiq } from "react-icons/si";
import { MdAssessment } from "react-icons/md";
import { GiTreeGrowth } from "react-icons/gi";

const Services = () => {
    return (
        <section id="myServices" className="container mx-auto py-5 px-4">
            <Heading title="Services" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <AiOutlineGlobal className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Build Global Delivery Capability</h2>
                    <p>Transform your operations with our Global Delivery Model, designed to seamlessly integrate onsite, nearsite, and offsite delivery centers. We enable 24/7 operations, cost optimization, and access to global talent, ensuring faster delivery, scalability, and risk mitigation. Our approach fosters innovation through cross-cultural collaboration, enhancing efficiency, client satisfaction, and competitive advantage. Let us streamline your distributed teams for maximum productivity and business growth.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <MdOutlineHideSource className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Outsourcing</h2>
                    <p>Optimize your operations with our outsourced software services, delivering cost-effective, high-quality solutions tailored to your needs. Our global team ensures 24/7 productivity, faster time-to-market, and access to specialized expertise. From development to support, we streamline processes, reduce risks, and drive innovation, allowing you to focus on core business goals while achieving scalability and competitive advantage.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <TbCertificate className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Quality & Operational Excellence</h2>
                    <p>Elevate your delivery quality and customer experience with our Operational Excellence Framework. We streamline processes, implement best practices, and leverage data-driven insights to enhance efficiency, reduce errors, and boost satisfaction. Our approach ensures consistent, high-quality deliverables, improved customer loyalty, and a competitive edge, transforming your operations for sustained success.
                    </p>
                </div>
                {/* -------------------------- */}
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <PiCurrencyInrFill className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Cost Optimization and Management</h2>
                    <p>Drive cost efficiency with our optimization model, designed to reduce expenses through structured COGS transformation. We can help you deliver high-quality solutions while optimizing resource utilization, leveraging global talent, and streamlining processes. Our approach ensures significant cost savings without compromising on performance, enabling you to achieve more with less and focus on strategic growth.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <VscServerProcess className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Process Design and Optimization</h2>
                    <p>Enhance efficiency and quality with our tailored lean management systems. We design and optimize processes to eliminate waste, streamline workflows, and improve productivity. Our customized solutions ensure seamless operations, higher output quality, and cost savings, empowering your business to achieve operational excellence and sustainable growth.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <TbTransform className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Delivery Transformation</h2>
                    <p>Revolutionize your software delivery with our Delivery Transformation service. We build high-performance teams, break free from traditional models, and implement agile, efficient processes. By fostering innovation and operational excellence, we ensure faster, higher-quality deliveries, enabling your business to achieve greater efficiency, scalability, and competitive advantage.
                    </p>
                </div>
                {/* -------------------------- */}
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <RiArrowTurnBackFill className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Turnaround Management</h2>
                    <p>Rescue and revitalize struggling projects with our Turnaround Management expertise. We identify root causes, implement strategic interventions, and realign resources to get unviable projects back on track. Our proven approach ensures successful delivery, restores stakeholder confidence, and transforms challenges into opportunities for growth and operational success.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <CgPerformance className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Performance Metrics Enhancement</h2>
                    <p>Boost your business performance. We focus on improving key indicators like operating profit, gross margin, schedule adherence, and effort efficiency. Through data-driven strategies and process optimization, we help you achieve measurable growth, operational excellence, and a stronger competitive edge.
                    </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <GrGrow className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Revenue Growth</h2>
                    <p>Accelerate your business expansion. We optimize business development and pre-sales functions, leveraging data-driven strategies and market insights to unlock new opportunities. Our approach drives sustainable growth, increases market share, and maximizes profitability, ensuring your business thrives in a competitive landscape.
                    </p>
                </div>
                {/* -------------------------- */}
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <SiManageiq className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Global Competency Centers (GCC)</h2>
                    <p>Establish Global Competency Centers (GCCs) to streamline software development, support and product delivery. With proven expertise in setting up GCCs in China, Mexico, Ireland, and India, we integrate these hubs into your global delivery framework. Focus on your core business while GCCs provide scalable, cost-effective, and high-quality services, driving efficiency and innovation.</p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <MdAssessment className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Delivery Capability Assessment</h2>
                    <p>Make informed decisions with confidence through our Independent Third-Party Assessments. We conduct due diligence and reverse due diligence for mergers and acquisitions, evaluating delivery capabilities, risks, and opportunities. Our insights empower you to navigate complex deals, optimize integration, and ensure successful outcomes, driving value and growth for your business.</p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#FF4D41] text-slate-100">
                    <GiTreeGrowth className="text-[30px]" />
                    <h2 className="font-medium text-[20px]">Enabling Startups - Ideation to Implementation</h2>
                    <p>Transform your vision into reality with our end-to-end technology development services. From planning, architecting, and designing to scaling your MVP into a full-fledged platform, we guide you every step of the way. Whether built internally or outsourced, we manage the program and create technology blueprints to secure investments, ensuring your product thrives in the market.
                    </p>
                </div>
            </div>
            <div>
                <a href="#myContactUs" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Schedule Your Free Consultation</a>
            </div>
        </section>
    )
}

export default Services
