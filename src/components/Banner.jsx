import React from "react";

const Banner = () => {
	return (
		<div className="px-28">
			<div className="bg-emerald-400 mx-auto rounded-lg h-80 p-10 text-left text-white flex flex-col justify-around">
				<h1 className="text-3xl font-bold">Let's Save The Ages!</h1>
				<div className="flex justify-between items-center">
					<p className="w-1/3">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Consectetur aut omnis obcaecati minus deleniti iure, quod ratione
						suscipit ea numquam.
					</p>
					<div className="w-1/2 text-right text-2xl">
						<a href="">Join Community »</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
