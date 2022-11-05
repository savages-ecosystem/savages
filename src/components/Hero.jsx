import React from "react";
import Slide1 from "../img/slide1.jpg";

const Hero = () => {
	return (
		<section className="my-16">
			<div className="m-auto w-10/12 h-[30rem] flex flex-col justify-evenly items-center p-10 leading-loose bg-slide1 bg-no-repeat bg-cover bg-bottom rounded-xl overflow-hidden text-white">
				<div className="text-left w-10/12">
					<h2 className="text-3xl font-bold">SAVAGES</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
						reiciendis.
					</p>
				</div>
				<div className="text-right w-6/12 self-end">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus vel ullam perferendis nisi voluptas error earum
						recusandae ducimus, voluptates eius laboriosam voluptate animi!
						Corrupti voluptates, molestias delectus facilis quibusdam quisquam
						optio veniam vero facere.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
