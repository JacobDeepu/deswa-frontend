import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../components/ButtonOutline";
import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                localStorage.setItem("uid", user.uid);
                setIsLoggedIn(true);
                console.log("uid", uid);
            } else {
                console.log("user is logged out");
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
                setIsLoggedIn(false);
                console.log("Signed out successfully");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <>
            <header className={"fixed top-0 w-full  z-30 bg-white-500 transition-all " + (scrollActive ? "shadow-md pt-0" : " pt-4")}>
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <img src={Logo} alt="DESWA" className="h-8 w-auto" />
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
                        <LinkScroll
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("home");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative " +
                                (activeLink === "home" ? " text-orange-500 animation-active " : "text-black-500 hover:text-orange-500")
                            }
                        >
                            Home
                        </LinkScroll>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        {isLoggedIn ? (
                            ""
                        ) : (
                            <Link to="/signin" className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                                Sign In
                            </Link>
                        )}
                        {isLoggedIn ? <ButtonOutline onClick={handleLogout}>Sign Out</ButtonOutline> : <ButtonOutline onClick={() => navigate("/signup")}>Sign Up</ButtonOutline>}
                    </div>
                </nav>
            </header>
            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
                <div className="bg-white-500 sm:px-3">
                    <ul className="flex w-full justify-between items-center text-black-500">
                        <LinkScroll
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("home");
                            }}
                            className={
                                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                (activeLink === "home" ? "  border-orange-500 text-orange-500" : " border-transparent")
                            }
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Home
                        </LinkScroll>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    );
};

export default Header;
