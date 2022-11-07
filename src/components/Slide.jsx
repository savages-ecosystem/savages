import React from "react";

const Slide = ({ slideInfo }) => {
	console.log("slide info: ", slideInfo);
	return (
		<div>
			<div
				className="m-auto w-10/12 h-[30rem] flex flex-col justify-evenly items-center p-10 leading-loose bg-no-repeat bg-cover bg-bottom rounded-xl overflow-hidden text-white"
				style={{
					backgroundImage: `url(${slideInfo.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
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
		</div>
	);
};

export default Slide;
