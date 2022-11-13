import React from "react";
import image from "../data/image";

const Partner = () => {
	return (
		<div className="py-10">
			<h3 className="text-3xl font-semibold   py-8 border-t-2 border-emerald-100 w-10/12 m-auto">
				Support Partnership
			</h3>
			<ul className="flex justify-center gap-20 [&>li>img]:h-[5rem] ">
				<li>
					<img src={image.logo_unhas} alt="logo1" />
				</li>
				<li>
					<img src={image.logo_maros} alt="logo2" />
				</li>
				<li>
					<img src={image.logo_telkom} alt="logo3" />
				</li>
				<li>
					<img src={image.logo_bumn} alt="logo4" />
				</li>
			</ul>
		</div>
	);
};

export default Partner;
