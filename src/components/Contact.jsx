// Inspiration video - How To Create Working Contact Form Using HTML & CSS | Receive Contact Form Data on Email
// https://www.youtube.com/watch?v=-HeadgoqJ7A

import React from 'react'
import Heading from "../components/Heading"

const Contact = () => {
    return (
        <section id="myContactUs" className="container mx-auto py-10 px-4">
            <Heading title="Contact Us" />

            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col gap-8 contact"
            >
                {/* Hidden Access Key */}
                <input type="hidden" name="access_key" value="77ba6cb4-ba39-4b29-9e3e-68b4149d6756" />

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Name */}
                    <input
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        className="contact-inputs inputStyle border border-[#FF4D41] w-full rounded-[5px] px-4 py-2"
                        required
                        pattern="^[A-Za-z]+(([' -][A-Za-z])?[A-Za-z]*)*$"
                        title="Only letters, hyphens (-), apostrophes ('), and spaces are allowed. No special characters or numbers."
                    />

                    {/* Last Name */}
                    <input
                        type="text"
                        name="last-name"
                        placeholder="Last Name | Given Name"
                        className="contact-inputs inputStyle border border-[#FF4D41] w-full rounded-[5px] px-4 py-2"
                        required
                        pattern="^[A-Za-z]+(([' -][A-Za-z])?[A-Za-z]*)*$"
                        title="Only letters, hyphens (-), apostrophes ('), and spaces are allowed. No special characters or numbers."
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email: example@email.com"
                    className="contact-inputs inputStyle border border-[#FF4D41] w-full rounded-[5px] px-4 py-2"
                    required
                />

                {/* Message */}
                <textarea
                    rows={6}
                    name="message"
                    placeholder="Your message ..."
                    className="contact-inputs inputStyle border border-[#FF4D41] w-full rounded-[5px] px-4 py-2"
                    required
                />

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-[#FF4D41] text-white px-6 py-3 rounded-md font-medium border border-[#FF4D41] 
        hover:bg-transparent hover:text-[#FF4D41] transition duration-300 ease-in-out cursor-pointer"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>

    )
}

export default Contact
