import React, { useMemo } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "./GetScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import heroImage from "../assets/hero.png";

const Hero = ({}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
            <ScrollAnimationWrapper>
                <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                            Looking for a <strong>Job</strong> or a <strong>Skilled Worker</strong> ?
                        </h1>
                        <p className="text-black-500 mt-4 mb-6">
                            <strong>DESWA</strong> can help you find experienced skilled workers or help you get a job.
                        </p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                    <div className="flex w-full">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <img className="w-full md:w-4/5 z-50" src={heroImage} />
                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default Hero;
