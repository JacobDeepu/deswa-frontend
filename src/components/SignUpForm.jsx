import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import GetScrollAnimation from "./GetScrollAnimation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUpForm = () => {
    const scrollAnimation = useMemo(() => GetScrollAnimation(), []);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/select");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <>
            <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="login">
                <ScrollAnimationWrapper>
                    <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                            <div className="w-full bg-white-500 border-2 border-orange-500 transition-all rounded-lg shadow-orange md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign Up Now</h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                                Your email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                className="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="remember"
                                                        aria-describedby="remember"
                                                        type="checkbox"
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:orange-500"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-600">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:text-orange-500 cursor-pointer transition-all">
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center mr-4">
                                                <button
                                                    type="submit"
                                                    onClick={onSubmit}
                                                    className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-sm font-light text-gray-600">
                                            Already have an account ?{" "}
                                            <Link to="/signin" className="font-medium text-primary-600 hover:text-orange-500 cursor-pointer transition-all">
                                                Sign In
                                            </Link>
                                        </p>
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

export default SignUpForm;
