import React, { useState } from "react";
import SavagesLogo from "../img/LOGO_SAVAGES.png";

const Navbar = () => {
	const [visibility, setVisibility] = useState(false);

	const handleDropdown = (e) => {
		e.preventDefault();
		console.log("Dropdown", visibility);
		setVisibility((prev) => !prev);
	};
	return (
		<nav className="h-16 navbar flex justify-between items-center px-10 text-white sticky top-0 z-10">
			<a href="/">
				<img src={SavagesLogo} alt="Savages Logo" className="w-[10rem]" />
			</a>
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
			<ul className="flex gap-16 cursor-pointer [&>li:hover]:bg-emerald-300 [&>li]:py-5 [&>li]:px-5 [&>li]:self-center [&>li>a]:rounded-full h-full justify-items-center ">
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
					<a href="#">Product</a>
				</li>
			</ul>
			<a href="#" className="hover:bg-emerald-300 py-2 px-4 rounded-full">
				<h2>Join Community!</h2>
			</a>
		</nav>
	);
};

export default Navbar;
