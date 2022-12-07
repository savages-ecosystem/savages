import React, { useState } from "react";
import SavagesLogo from "../img/LOGO_SAVAGES.png";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowWidth from "../hooks/useWindowWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleScroll }) => {
	const scrollValue = useScrollPosition();
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	const windowWidth = useWindowWidth();

	const toggleDropDown = () => {
		setDropdownVisibility((prev) => !prev);
	};

	return windowWidth < 640 ? (
		<nav className="h-16 bg-white top-0 sticky flex justify-between items-center z-10 px-5">
			<Link to={"/"}>
				<img src={SavagesLogo} alt="Savages Logo" className="w-[8rem]" />
			</Link>
			<button onClick={toggleDropDown} className="">
				<FontAwesomeIcon icon={faBars} fontSize="large" />
			</button>
			<ul
				className="absolute left-0 top-16 right-0 text-white shadow-md"
				style={{ visibility: dropdownVisibility ? "visible" : "hidden" }}
			>
				<li className="text-left p-3 hover:bg-emerald-300 bg-emerald-400">
					<Link to="movements" className="">
						Movements
					</Link>
				</li>
				<li className="text-left p-3 hover:bg-emerald-300 bg-emerald-400">
					<Link to="/products" className="">
						Products
					</Link>
				</li>
			</ul>
		</nav>
	) : (
		<nav
			className={
				scrollValue > 0
					? "navbar navbar-scroll shadow-md"
					: "navbar navbar-scroll"
			}
		>
			<Link to={"/"}>
				<img src={SavagesLogo} alt="Savages Logo" className="w-[10rem]" />
			</Link>
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
