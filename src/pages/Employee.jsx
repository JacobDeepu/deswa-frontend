import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import GetScrollAnimation from "../components/GetScrollAnimation";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Employee = () => {
    const scrollAnimation = useMemo(() => GetScrollAnimation(), []);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [aadhar, setAadhar] = useState("");

    const addEmployee = async (e) => {
        e.preventDefault();
        try {
            const uid = localStorage.getItem("uid");
            console.log("Test", uid);
            await setDoc(doc(db, "employee", uid), {
                name: name,
                address: address,
                mobile: mobile,
                aadhar: aadhar,
            });
            console.log("Document written");
            navigate("/");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="login">
                <ScrollAnimationWrapper>
                    <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                            <div className="w-full bg-white-500 border-2 border-orange-500 transition-all rounded-lg shadow-orange md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Employee Registration</h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Full Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">
                                                Mobile
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                id="mobile"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Mobile"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900">
                                                Aadhar Number
                                            </label>
                                            <input
                                                type="text"
                                                name="aadhar"
                                                id="aadhar"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Aadhar Number"
                                                value={aadhar}
                                                onChange={(e) => setAadhar(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="terms"
                                                    aria-describedby="terms"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-600">
                                                    I accept the{" "}
                                                    <a className="font-medium text-orange-500 font-medium text-grey-600 hover:cursor-pointer transition-all" href="#">
                                                        Terms and Conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={addEmployee}
                                            className="w-full font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange"
                                        >
                                            Register
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

export default Employee;
