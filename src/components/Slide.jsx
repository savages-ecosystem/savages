import React from "react";

const Slide = ({ slideInfo }) => {
	return (
		<div>
			<div
				className="m-auto group sm:w-full sm:rounded-none w-[85%] h-[35rem] sm:h-[45rem] flex flex-col justify-evenly items-center p-10 sm:p-5 leading-loose bg-no-repeat bg-cover bg-bottom rounded-xl overflow-hidden text-white"
				style={{
					backgroundImage: `url(${slideInfo?.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="flex flex-col sm:justify-evenly sm:w-full w-10/12 sm:h-full gap-20">
					<div className="text-left w-9/12 sm:w-full">
						<h2 className="text-3xl font-bold">
							{slideInfo?.content?.heading}
						</h2>
						<p>{slideInfo?.content?.description || ""}</p>
					</div>
					<div className="text-justify w-full sm:text-justify self-end">
						{slideInfo?.content?.body.map((content) => {
							return (
								<div className="mb-3">
									<p>{content}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slide;
