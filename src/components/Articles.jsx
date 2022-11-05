import React from "react";
import Article from "./Article";

const Articles = () => {
	return (
		<div className="w-10/12 m-auto">
			<h3 className="text-3xl my-5 font-bold">Arcticles</h3>
			<div className="flex flex-wrap gap-10 justify-center my-5">
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
			</div>
		</div>
	);
};

export default Articles;
