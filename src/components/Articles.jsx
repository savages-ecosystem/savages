import React from "react";
import Article from "./Article";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediumData from "../data/dataMedium";

const Articles = () => {
	const mediumData = MediumData.dataMedium.map((data, index) => {
		return { img: data.image, content: data.title, link: data.link };
	});
	return (
		<div className="w-10/12 sm:w-full m-auto py-20">
			<h3 className="text-3xl my-5 font-semibold">Arcticles</h3>
			<div className="flex flex-wrap gap-10 justify-center my-3">
				{mediumData.map((article, index) => (
					<Article
						classList="pb-10 mx-2 my-1 w-[18rem] sm:w-10/12"
						key={index}
						articleProperty={article}
					/>
				))}
			</div>
		</div>
	);
};

export default Articles;
