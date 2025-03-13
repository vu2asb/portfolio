import React from 'react'
import Heading from "../components/Heading"


const UpSkill = () => {
    return (
        <section id="myUpSkill" className="container mx-auto py-10 px-4">
            <Heading title="UpSkill" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-xl text-slate-800">

                <div>
                    <img className="w-[800px]" src="/udemy-course-hifi.png" alt="Udemy course photo" />
                </div>
                <div>
                    <p className="text-[20px] font-semibold">
                        Hit the ground running; apply what you learn in this course and improve your estimation accuracy to Win New Business!
                    </p>
                    <br />
                    <p className="text-[18px]">What you’ll learn</p>
                    <ul className="text-[14px] list-disc ps-10">
                        <li>This series of courses is designed to help you establish a strong foundation in various aspects of Software Development Services Organizations.</li>
                        <li>
                            It will guide you in mastering these aspects through specialized courses, like this course focused on "Estimation."
                        </li>
                        <li>
                            The series aims to provide you with an in-depth understanding of the "Reference Model," a visual representation that illustrates a typical Software Development.
                        </li>
                        <li>
                            You will gain insights into how different functional areas collaborate and synergize to improve business performance metrics, notably "Profitability."
                        </li>
                        <li>
                            Understand the concept of "Profitability" within the context of the software development services industry.

                        </li>
                        <li>
                            Discover effective strategies for enhancing "Profitability" by maximizing revenue and optimizing expenditures.
                        </li>
                        <li>
                            Identify and prioritize your focus on three widely recognized key business performance metrics: Revenue, Gross Margin, and Customer Satisfaction.
                        </li>
                        <li>
                            Specifically, this course will assist you in refining the accuracy and precision of your cost estimations during the pre-sales phase.
                        </li>
                        <li>
                            Why begin the series with "Estimation"? Because many issues in project delivery, such as cost and schedule overruns can often be traced back to bad estimation.
                        </li>
                    </ul>
                    <div>
                    <a href="https://bit.ly/3DnQYd5" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Enroll Now!</a>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default UpSkill
