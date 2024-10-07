import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUsSection = () => {
    return (
        <section
            id="Contact"
            className="flex flex-col gap-6 items-center bg-gray-200 py-5"
        >
            <h1 className="text-[3rem] underline font-semibold">
                Get In Touch
            </h1>
            <div className="flex gap-4">
                <h2 className="flex items-center gap-3">
                    <span className="text-3xl text-blue-900">@</span>
                    TeamX@email.com
                </h2>
                <a href="#" className="flex items-center gap-3">
                    <span className="text-3xl text-blue-900">
                        <FaLinkedin />
                    </span>
                    <p className="underline">
                        TeamX Linkedin
                    </p>
                </a>
                <a href="#" className="flex items-center gap-3">
                    <span className="text-3xl text-blue-900">
                        <FaGithub />
                    </span>
                    <p className="underline">
                        TeamX Github
                    </p>
                </a>
            </div>
        </section>
    );
};

export default ContactUsSection;
