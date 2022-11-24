import React, { useState } from "react";
import SavagesLogo from "../img/LOGO_SAVAGES.png";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = ({ handleScroll }) => {
	const scrollValue = useScrollPosition();
	console.log(scrollValue);

	return (
		<nav className="navbar navbar-scroll">
			<Link to={"/"}>
				<img src={SavagesLogo} alt="Savages Logo" className="w-[10rem]" />
			</Link>
			{/* <div>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search.."
					className="rounded-full p-2 px-5 w-80 min-w-16 text-black ring-2 ring-emerald-600"
					autoComplete="off"
				/>
			</div> */}
			<ul className="flex gap-16 cursor-pointer [&li>*]:bg-emerald-600  [&>li]:py-5 [&>li]:px-5 [&>li]:self-center h-full justify-items-center ">
				<li className="relative group">
					<Link to="movements" className=" px-3 py-2">
						Movements
					</Link>
				</li>
				<li>
					<Link to="/products" className=" px-3 py-2">
						Products
					</Link>
				</li>
			</ul>
			<a
				href="#"
				className="bg-emerald-600 rounded-full px-3 py-2 hover:shadow-inner hover:shadow-black/20 shadow-black/20"
			>
				<h2>Join Community!</h2>
			</a>
		</nav>
	);
};

export default Navbar;
