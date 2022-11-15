import React from "react";

const Article = ({ articleProperty, classList = "" }) => {
	return (
		<div
			className={"overflow-hidden bg-white rounded-xl shadow-md " + classList}
		>
			<img
				src={articleProperty.img}
				alt=""
				className="rounded-t-xl h-48 w-full object-cover"
			/>
			<p className="text-justify leading-relaxed my-3 p-3">
				{articleProperty.content.substring(0, 115)}{" "}
			</p>
			<a
				href={articleProperty?.link || ""}
				className="pb-2 pt-1 px-4 text-white rounded-full bg-emerald-400 hover:bg-emerald-300"
				target="_blank"
				rel="noreferrer"
			>
				Selengkapnya
			</a>
		</div>
	);
};

export default Article;
