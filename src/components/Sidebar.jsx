import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"
                } top-0 left-0 bg-gray-800 z-20 text-slate-100 grid place-items-center`}
        >
            {/* Close Button */}
            <div
                className="py-20 absolute top-5 right-5 text-[24px] hover:cursor-pointer"
                onClick={toggleSidebar}
            >
                <RiCloseFill size={30} color="red" />
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col place-items-center gap-4 text-[28px]">
                {[
                    { name: "Home", link: "/" },
                    { name: "About", link: "#myAbout" },
                    { name: "Services", link: "#myServices" },
                    { name: "Blogs", link: "/blogs" },
                    { name: "Upskill", link: "#myUpSkill" },
                    { name: "Publications", link: "#myPublications" },
                    { name: "Contact", link: "#myContactUs" },
                ].map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        className="hover:text-[#FF4D41]"
                        onClick={toggleSidebar} // Close sidebar when clicking a link
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
