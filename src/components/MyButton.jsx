import React from 'react'

const MyButton = ({ text, link }) => {
    return (
        <a href="{link}" className="btn bg-[#FF4D41] text-slate-100 px-4 py-2 rounded inline-block mt-10 font-medium border border-[#FF4D41] hover:bg-transparent hover:text-[#FF4D41] transition duration-200">{text}</a>
    )
}

export default MyButton
