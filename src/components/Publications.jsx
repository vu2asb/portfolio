import React from 'react'
import Heading from "../components/Heading"

const Publications = () => {
    return (
        <section id="myPublications" className="container mx-auto py-10 px-4">
            <Heading title="Publications" />
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
            <hr className="border-slate-300"/>
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

        </section>
    )
}

export default Publications
