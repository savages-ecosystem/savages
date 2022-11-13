import React from "react";

const card = ({ articleProperty, classList }) => {
	return (
		<div>
			<a
				href={articleProperty?.link || ""}
				target={articleProperty?.link ? "_blank" : ""}
				onClick={(e) => e.preventDefault()}
			>
				<div
					className={
						"overflow-hidden bg-white rounded-xl shadow-md cursor-pointer " +
						classList
					}
				>
					<img
						src={articleProperty.img}
						alt=""
						className="rounded-xl h-56 w-full object-cover"
					/>
					<p className="text-center leading-relaxed my-3 p-3">
						{articleProperty.content.substring(0, 75)}...
					</p>
				</div>
			</a>
		</div>
	);
};

export default card;
