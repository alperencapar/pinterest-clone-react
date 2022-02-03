import React from "react";
import logo from "../pinterest-logo.png";
// import Input from "./Input";
import { FaBell } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "../assets/scss/navbar.scss";

const Navbar = () => {
    return (
        <header>
            <div className="logo-container">
                <div className="logo-wrapper">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
            </div>

            <ul>
                <li>
                    <a href="/" className="">
                        Ana Sayfa
                    </a>
                </li>
                <li>
                    <div className="search-container">
                        <div className="search-wrapper">
                            <div className="search-front">
                                <FaSearch />
                            </div>
                            <input type="text" />
                        </div>
                    </div>
                </li>

                <li>
                    <a href="/">
                        <FaBell />
                    </a>
                </li>

                <li>
                    <a href="/">
                        <FaCommentDots />
                    </a>
                </li>

                <li>
                    <a href="/">
                        <FaUser />
                    </a>
                </li>

                <li>
                    <a href="/">
                        <FaAngleDown />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
