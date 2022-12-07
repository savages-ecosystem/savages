import React from "react";

const Movement = ({ data }) => {
	return (
		<div className="text-left flex flex-col leading-relaxed border-b-2 border-emerald-800 mb-10 overflow-hidden ">
			<img
				className="rounded-xl sm:rounded-none"
				src={data?.img}
				alt="savages ecosystem"
			/>
			<div className="px-5 py-10 text-justify">
				<a href={data.link} target="_blank" rel="noreferrer">
					<h3 className="text-2xl mb-5 hover:text-emerald-400 hover:underline">
						{data?.title}
					</h3>
				</a>
				<p>{data?.description}</p>
			</div>
		</div>
	);
};

export default Movement;
