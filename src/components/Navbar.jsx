import React from "react";

const Navbar = () => {
	return (
		<nav className="h-16 bg-emerald-400 flex justify-between items-center px-10 text-white">
			<a href="#">
				<img src="" alt="Savages Logo" />
			</a>
			<div>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search.."
					className="rounded-full p-2 px-5 w-80 min-w-16 text-black"
				/>
			</div>
			<ul className="flex gap-16 ">
				<li>
					<a href="#">Movement</a>
				</li>
				<li>
					<a href="#">Product</a>
				</li>
			</ul>
			<a href="#">
				<h2>Join Community!</h2>
			</a>
		</nav>
	);
};

export default Navbar;
