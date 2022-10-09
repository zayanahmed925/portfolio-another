import React, { useEffect, useState } from "react";
import Items from "../../assets/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import "./Project.css";

const Project = () => {
    const [items, setItems] = useState(Items);
    const [activeBtn, setActiveBtn] = useState("all");
    const [ref, inView] = useInView();
    const animation = useAnimation();
    const headingAnimation = useAnimation();
    const location = useLocation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 1.2,
                },
            });
            headingAnimation.start({ y: 0, opacity: 1, transition: { duration: 1 } });
        }
        if (location.pathname === "/" && items.length > 3) {
            setItems(items.slice(0, 3));
        }
    }, [inView, headingAnimation, animation, location, items]);

    const filterItem = (category) => {
        const filtered = Items.filter((item) => item.category === category);
        setItems(filtered);
        if (filtered.length > 3 && location.pathname === "/") {
            setItems(filtered.slice(0, 3));
        }
    };
    return (
        <div className="parent py-20">
            <motion.div initial={{ y: -200, opacity: 0 }} animate={headingAnimation}>
                <div className="mb-12">
                    <h1 className="text-4xl font-semibold drop-shadow-md text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h1>
                    <h3 className="text-gray-400 text-center">
                        Some of my recent Projects
                    </h3>
                </div>
                <div className="my-6 flex items-center justify-center flex-wrap">
                    <button
                        className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "all" && "active-btn"
                            }`}
                        onClick={() => {
                            setActiveBtn("all");
                            location.pathname === "/"
                                ? setItems(Items.slice(0, 3))
                                : setItems(Items);
                        }}
                    >
                        All
                    </button>
                    <button
                        className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "business" && "active-btn"
                            }`}
                        onClick={() => {
                            setActiveBtn("business");
                            filterItem("business");
                        }}
                    >
                        Business
                    </button>
                    {/* <button
            className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
              activeBtn === "e-commerce" && "active-btn"
            }`}
            onClick={() => {
              setActiveBtn("e-commerce");
              filterItem("e-commerce");
            }}
          >
            E-Commerce
          </button> */}
                    <button
                        className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "personal" && "active-btn"
                            }`}
                        onClick={() => {
                            setActiveBtn("personal");
                            filterItem("personal");
                        }}
                    >
                        Personal
                    </button>
                </div>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={animation}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {items.map((item) => (
                    <motion.div
                        initial={{ x: 200, opacity: 0, scale: 0 }}
                        animate={{
                            x: 0,
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.3 },
                        }}
                        key={item.id}
                        className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500"
                        style={{ backgroundColor: "#313131" }}
                    >
                        <div className="item custom-bg  border cursor-pointer border-gray-800 rounded-lg  mt-12 mb-8 shadow-2xl overflow-hidden mx-0 sm:mx-6 lg:mx-0">
                            <img
                                className="rounded h-60 lg:h-60 sm:h-96 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                src={item.mainImage}
                                alt="Item"
                            />
                            <div className="overlay">
                                <h3 className="text-2xl text-primary font-semibold">
                                    {item.title}
                                </h3>
                                <Link to={`/project/${item.id}`} className="mt-3 inline-block">
                                    <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                                        See Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {location.pathname === "/" && (
                <div className="mt-4 text-right">
                    <Link
                        to="/project"
                        className="text-2xl hover:text-primary duration-300"
                    >
                        <button>See All</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Project;