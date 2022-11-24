import React from "react";

const Banner = () => {
	return (
		<div className="px-28 sm:px-5">
			<div className="bg-emerald-400 mx-auto rounded-lg h-80 p-10 sm:p-2 text-left text-white flex flex-col justify-around">
				<h1 className="text-3xl font-bold">Let's Save The Ages!</h1>
				<div className="flex sm:flex-col justify-between items-center">
					<p className="w-1/3 sm:w-full">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Consectetur aut omnis obcaecati minus deleniti iure, quod ratione
						suscipit ea numquam.
					</p>
					<div className="w-1/2 sm:w-full text-right text-2xl">
						<a href="#">Join Community »</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
