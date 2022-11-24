import React from "react";

const Product = ({ image }) => {
	return (
		<div className="w-full bg-white rounded-xl overflow-hidden text-left hover:scale-[1.01] transition ease-in-out delay-150 hover:shadow-lg">
			<img src={image} alt="savages product" />
			<div className="px-10 pb-8">
				<h1 className="text-2xl my-5">title</h1>
				<p className="text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime
					suscipit, atque velit, laboriosam sequi voluptatem recusandae dolorem,
					cumque laudantium voluptate eum. Eius libero earum id esse?
					Voluptatibus numquam, repudiandae quod laudantium nulla eum, voluptate
					aut quos modi quo corporis, laborum blanditiis quam. Voluptatem, odio
					id rem iusto tempora eum.
				</p>
				<div className="relative pt-12 pb-4 left-0 bottom-0 right-0 text-center text-white">
					<a
						href="#"
						className="pb-3 pt-2 px-5 bg-emerald-700 rounded-full hover:bg-emerald-500"
					>
						Selengkapnya
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
