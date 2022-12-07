import React from "react";

const card = ({ cardProperty, classList }) => {
	return (
		<div>
			<div
				className={"overflow-hidden bg-white rounded-xl shadow-md " + classList}
			>
				<div className="h-full relative">
					<img src={cardProperty.img} alt="" className="h-full  object-cover" />
					<p className="absolute text-left bottom-0 bg-gradient-to-t from-white text-black left-0 right-0 pl-2 pt-3 pb-1 font-semibold">
						{cardProperty.name}
					</p>
				</div>
				<p className="text-center leading-relaxed my-3 p-3">
					{cardProperty.content}
				</p>
			</div>
		</div>
	);
};

export default card;
