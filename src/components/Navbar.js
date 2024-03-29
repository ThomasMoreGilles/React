import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import React from "react";
import Logo from "../images/logo.png";
import { links } from "../data";
import { MdOutlineAdd, MdOutlineClose } from "react-icons/md";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	const handleNavToggle = () => {
		return setIsNavShowing((prevVAlue) => {
			return !prevVAlue;
		});
	};

	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" className="logo" onClick={handleNavToggle}>
					<img src={Logo} alt="Nav-logo" />
				</Link>
				<ul
					className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
				>
					{/* Destructure the links array of object from the links to get each item */}
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={handleNavToggle}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNavShowing ? <MdOutlineClose /> : <MdOutlineAdd />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

