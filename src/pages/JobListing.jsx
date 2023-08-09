import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import GetScrollAnimation from "../components/GetScrollAnimation";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const JobListing = () => {
    const scrollAnimation = useMemo(() => GetScrollAnimation(), []);
    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    const getJobPosts = async (e) => {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setJobs(data);
        console.log(jobs, data);
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });
    };
    useEffect(() => {
        getJobPosts();
    }, []);

    return (
        <>
            <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="job-pp">
                <ScrollAnimationWrapper>
                    <motion.div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6" variants={scrollAnimation}>
                        <div className="flex justify-between items-center">
                            {jobs?.map((job, i) => (
                                <div className="px-3 flex items-stretch" key={i}>
                                    <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                                        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                            <div className="flex order-2 xl:order-1">
                                                <div className="flex flex-col ml-5 text-left">
                                                    <p className="text-lg text-black-600 capitalize">{job.name}</p>
                                                    <p className="text-sm text-black-500 capitalize">{job.amount}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                                <p className="text-sm">{job.skill}</p>
                                            </div>
                                        </div>
                                        <p className="my-5 text-left">“{job.description}”</p>
                                        <button
                                            type="submit"
                                            onClick={() => navigate("/")}
                                            className="w-full font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </>
    );
};

export default JobListing;
