import React from "react";

const card = ({ articleProperty, classList }) => {
	return (
		<div>
			<div
				className={"overflow-hidden bg-white rounded-xl shadow-md " + classList}
			>
				<img
					src={articleProperty.img}
					alt=""
					className="rounded-l-xl h-56 w-full object-cover"
				/>
				<p className="text-center leading-relaxed my-3 p-3">
					{articleProperty.content.substring(0, 75)}...
				</p>
			</div>
		</div>
	);
};

export default card;
