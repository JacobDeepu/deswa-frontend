import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import GetScrollAnimation from "../components/GetScrollAnimation";

const Selection = () => {
    const scrollAnimation = useMemo(() => GetScrollAnimation(), []);
    const navigate = useNavigate();

    return (
        <>
            <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="login">
                <ScrollAnimationWrapper>
                    <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                            <div className="w-full bg-white-500 border-2 border-orange-500 transition-all rounded-lg shadow-orange md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">You are looking for</h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <button
                                            type="submit"
                                            onClick={() => navigate("/employee")}
                                            className="w-full font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                                        >
                                            Job
                                        </button>
                                        <button
                                            type="submit"
                                            onClick={() => navigate("/employer")}
                                            className="w-full font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                                        >
                                            Skilled Worker
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </>
    );
};

export default Selection;
