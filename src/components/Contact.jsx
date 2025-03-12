import React from 'react'
import Heading from "../components/Heading"

const Contact = () => {
    return (
        <section id="myContactUs" className="container mx-auto py-10 px-4">
            <Heading title="Contact Us" />
            <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="First Name" className="inputStyle border border-[#FF4D41] w-[100%] rounded-[5px] px-4 py-2" required />
                    <input type="text" placeholder="Last Name | Given Name" className="inputStyle border border-[#FF4D41] w-[100%] rounded-[5px] px-4 py-2" required />
                </div>
                <input type="email" placeholder="Email: rahul@action.com" className="inputStyle border border-[#FF4D41] w-[100%] rounded-[5px] px-4 py-2" required />
                <textarea rows="6" placeholder="Your message ..." className="inputStyle border border-[#FF4D41] w-[100%] rounded-[5px] px-4 py-2" required />
                <div>
                    <button type="submit" className="bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
