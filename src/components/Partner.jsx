import React from "react";
import image from "../data/image";

const Partner = () => {
	return (
		<div className="pt-5">
			<h3 className="text-3xl font-semibold py-8 border-t-2 border-emerald-100 w-10/12 m-auto">
				Support Partnership
			</h3>
			<ul className="flex justify-center [&>li>img]:h-[10rem] [&>li>img]:sm:h-[5rem]">
				<li>
					<img src={image.logo_all} alt="logo1" />
				</li>
			</ul>
		</div>
	);
};

export default Partner;
