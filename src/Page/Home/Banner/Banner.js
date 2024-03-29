import React from 'react';
import { Link } from "react-router-dom";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import '../../Shared/Shared.css';
const Banner = () => {
    return (
        <div className="parent min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between">
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="text-gray-400 text-xl font-medium">Hello, I'm</h2>
                <h1 className="text-4xl font-semibold mb-0">Zehadul Islam</h1>
                <h2 className="my-4 text-2xl text-primary font-bold">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Front-End Developer',
                            2000,
                            'Full Stack Developer',
                            2000,
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </h2>
                <p className="text-gray-400 max-w-md mb-6 font-medium">
                    I am Jr. Front-end Developer. I am very passionate to my work and
                    dedicated to explore New Tools And Technologies.
                </p>

                <div className="flex items-center">
                    <a
                        href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
                        target="blank"
                    >
                        <button className="primary-button">My Resume</button>
                    </a>
                    <Link to="/about" className="ml-4">
                        <button className="btn border-2 border-primary bg-transparent hover:bg-primary text-white duration-500">
                            About Me
                        </button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                className="w-full md:w-1/2"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <img src="https://i.ibb.co/dDwYKvN/about-animation-f8041093e7ecb1fe3bd0.gif" alt="Zehadul Islam" />
            </motion.div>
        </div>
    );
};

export default Banner;