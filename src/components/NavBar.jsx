import React from 'react'
import Link from 'next/link'
import { MdCardMembership } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


const NavBar = ({toggleSidebar}) => {
    return (
        <div className="bg-slate-100 fixed top-0 w-[100%] z-30">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <div className="text-[24px]">
                    Ashok Singh
                </div>
                <div className="hidden md:flex gap-4">
                    <Link href="/" className="hover:text-[#FF4D41]">
                        Home
                    </Link>
                    <Link href="#myAbout" className="hover:text-[#FF4D41]">
                        About
                    </Link>
                    <Link href="#myServices" className="hover:text-[#FF4D41]">
                        Services
                    </Link>
                    <Link href="/blogs" className="hover:text-[#FF4D41]">
                        Blogs
                    </Link>
                    <Link href="#myUpSkill" className="hover:text-[#FF4D41]">
                        UpSkill
                    </Link>
                    <Link href="#myPublications" className="hover:text-[#FF4D41]">
                        Publications
                    </Link>
                    <Link href="#myContactUs" className="hover:text-[#FF4D41]">
                        Contact
                    </Link>
                </div>
                <a href="#" className="hidden md:flex border border-[#FF4D41] flex-row justify-between items-center px-4 py-1 gap-4 rounded text-red-500 hover:bg-[#FF4D41] hover:text-slate-100 transition duration-200">
                    Member Area
                    <MdCardMembership />
                </a>
                <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
                    <FiMenu />
                </div>
            </div>
        </div>
    )
}

export default NavBar
