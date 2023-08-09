import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import getScrollAnimation from "./GetScrollAnimation";
import aboutImage from "../assets/about.png";

const features = ["Decentralized skilled workers platform", "Connects skilled workers with potential clients", "Blockchain technology and smart contracts", "Secure and Transparent Transactions"];

const About = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="about">
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <img className="w-full md:w-4/5 z-50" src={aboutImage} />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col items-start py-2 justify-start ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl py-2 font-medium leading-relaxed text-black-600">What is DESWA</h3>
                        <p className="my-2 text-black-500">
                            The main objective of this application is to establish a decentralized platform that employs blockchain technology to connect skilled workers with potential clients.
                        </p>
                        <ul className="text-black-500 self-start list-inside m-8">
                            {features.map((feature, index) => (
                                <motion.li
                                    className="relative circle-check custom-list"
                                    custom={{ duration: 2 + index }}
                                    variants={scrollAnimation}
                                    key={feature}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                >
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default About;
