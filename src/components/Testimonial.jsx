import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowWidth from "../hooks/useWindowWidth";

const Testimonial = () => {
	const windowWidth = useWindowWidth();
	const Testimonials = [
		{
			img: "./img/testi1.jpg",
			name: "Ibu Munarti",
			content: `"Alhamdulillah, terima kasih banyak untuk pembelajaran yang sangat bermanfaat dan menjadi modal usaha di desa kami dalam mengembangkan usaha"`,
		},
		{
			img: "./img/testi2.jpg",
			name: "Ibu Tini",
			content: `"Saya merasakan keistimewaan luar biasa, karena yang awalnya dulu kita rasa nya biasa saja sekarang sudah lebih baik lagi, baik itu dari segi rasa, cara buat nya, atau cara mengelolanya"`,
		},
	];
	const SliderSettings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: windowWidth < 640 ? 1 : 2,
		slidesToScroll: windowWidth < 640 ? 1 : 2,
		arrows: true,
		className: "",
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className="pb-20 pt-10">
			<h3 className="text-3xl font-semibold py-8 border-t-2 border-emerald-100 w-10/12 m-auto">
				Testimonials
			</h3>
			<div className=" m-auto sm:w-full w-10/12 gap-10 px-16">
				<Slider {...SliderSettings}>
					{Testimonials.map((testimonial, index) => {
						return (
							<Card
								classList="flex mx-6 min-h-[15rem] sm:flex-col sm:h-[40rem] h-[20rem] gap-3 sm:w-[20rem] w-[30rem] items-center max-w-[30rem] [&>*]:w-1/2 sm:[&>*]:w-full  my-3"
								key={index}
								cardProperty={testimonial}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonial;
