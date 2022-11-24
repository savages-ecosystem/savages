import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
	const Testimonials = [
		{
			img: "../img/slide1.jpg",
			content: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem incidunt inventore rerum officia ea corrupti asperiores, provident accusantium et illo libero ipsam quidem amet quis sequi adipisci ab dolorem repellendus explicabo esse? Eius aperiam in asperiores dolorum, modi vero doloribus culpa sunt laudantium veniam praesentium sit nulla ipsa quod saepe consectetur non porro quibusdam possimus cum. Fugit possimus dolorum dignissimos velit voluptatum praesentium consequatur hic! Perferendis iusto repellat non numquam, pariatur id nam, consequuntur esse velit cupiditate aliquid. Voluptatibus hic, impedit autem porro animi adipisci id doloremque, eveniet quis suscipit possimus iste iure consequuntur magnam quisquam maiores ad atque ex!"`,
		},
		{
			img: "../img/slide2.jpg",
			content: `"asperiores, provident accusantium et illo libero ipsam quidem amet quis sequi adipisci ab dolorem repellendus explicabo esse? Eius aperiam in asperiores dolorum, modi vero"`,
		},
		{
			img: "../img/slide1.jpg",
			content: `"Voluptatibus hic, impedit autem porro animi adipisci id doloremque, eveniet quis suscipit possimus iste iure consequuntur magnam quisquam maiores ad atque ex!"`,
		},
		{
			img: "../img/slide3.jpg",
			content: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione."`,
		},
		{
			img: "../img/slide2.jpg",
			content: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione."`,
		},
		{
			img: "../img/slide3.jpg",
			content: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione."`,
		},
	];
	const SliderSettings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		className: "",
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className="py-20">
			<h3 className="text-3xl font-semibold py-8 border-t-2 border-emerald-100 w-10/12 m-auto">
				Testimonials
			</h3>
			<div className=" m-auto sm:w-full w-10/12 gap-10 px-16">
				<Slider {...SliderSettings}>
					{Testimonials.map((testimonial, index) => {
						return (
							<Card
								classList="flex mx-6 min-h-[13rem] gap-3 sm:w-[20rem] w-[30rem] items-center max-w-[30rem] [&>*]:w-1/2 [&>img]:h-10/12 my-3"
								key={index}
								articleProperty={testimonial}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonial;
