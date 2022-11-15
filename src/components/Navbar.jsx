import React, { useState } from "react";
import SavagesLogo from "../img/LOGO_SAVAGES.png";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = ({ handleScroll }) => {
	const scrollValue = useScrollPosition();
	console.log(scrollValue);

	return (
		<nav
			className={
				scrollValue > 0
					? "navbar navbar-scroll debug"
					: "navbar navbar-noscroll"
			}
		>
			<Link to={"/"}>
				<img src={SavagesLogo} alt="Savages Logo" className="w-[10rem]" />
			</Link>
			<div>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search.."
					className="rounded-full p-2 px-5 w-80 min-w-16 text-black ring-2 ring-emerald-600"
					autoComplete="off"
				/>
			</div>
			<ul className="flex gap-16 cursor-pointer [&>li:hover]:bg-emerald-300 [&>li]:py-5 [&>li]:px-5 [&>li]:self-center h-full justify-items-center ">
				<li className="relative group []">
					<a>Movement</a>
					<ul className="absolute bg-emerald-300 w-44 [&>li]:p-4 [&>li]:bg-emerald-400 [&>li:hover]:bg-emerald-300 -left-[0rem] top-[4rem] hidden group-hover:block">
						<li>Dropdown 12345</li>
						<li>Dropdown 2</li>
						<li>Dropdown 3</li>
						<li>Dropdown 4</li>
					</ul>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
			</ul>
			<a href="#" className="hover:bg-emerald-300 py-2 px-4 rounded-full">
				<h2>Join Community!</h2>
			</a>
		</nav>
	);
};

export default Navbar;
