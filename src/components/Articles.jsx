import React from "react";
import Article from "./Article";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediumData from "../data/dataMedium";

const Articles = () => {
	const articleProperties = [
		{
			img: "../img/slide1.jpg",
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem incidunt inventore rerum officia ea corrupti asperiores, provident accusantium et illo libero ipsam quidem amet quis sequi adipisci ab dolorem repellendus explicabo esse? Eius aperiam in asperiores dolorum, modi vero doloribus culpa sunt laudantium veniam praesentium sit nulla ipsa quod saepe consectetur non porro quibusdam possimus cum. Fugit possimus dolorum dignissimos velit voluptatum praesentium consequatur hic! Perferendis iusto repellat non numquam, pariatur id nam, consequuntur esse velit cupiditate aliquid. Voluptatibus hic, impedit autem porro animi adipisci id doloremque, eveniet quis suscipit possimus iste iure consequuntur magnam quisquam maiores ad atque ex!",
		},
		{
			img: "../img/slide2.jpg",
			content:
				"asperiores, provident accusantium et illo libero ipsam quidem amet quis sequi adipisci ab dolorem repellendus explicabo esse? Eius aperiam in asperiores dolorum, modi vero",
		},
		{
			img: "../img/slide1.jpg",
			content:
				"Voluptatibus hic, impedit autem porro animi adipisci id doloremque, eveniet quis suscipit possimus iste iure consequuntur magnam quisquam maiores ad atque ex!",
		},
		{
			img: "../img/slide3.jpg",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione.",
		},
		{
			img: "../img/slide2.jpg",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione.",
		},
		{
			img: "../img/slide3.jpg",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione.",
		},
	];

	const mediumData = MediumData.dataMedium.map((data, index) => {
		return { img: data.image, content: data.title, link: data.link };
	});

	console.log(MediumData.dataMedium);

	return (
		<div className="w-10/12 m-auto py-20">
			<h3 className="text-3xl my-5 font-semibold">Arcticles</h3>
			<div className="flex flex-wrap gap-10 justify-center my-3">
				{mediumData.map((article, index) => (
					<Article
						classList="pb-10 mx-2 my-1 w-[18rem]"
						key={index}
						articleProperty={article}
					/>
				))}
			</div>
		</div>
	);
};

export default Articles;
