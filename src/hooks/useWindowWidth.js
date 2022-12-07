import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const updateValue = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", updateValue);
		updateValue();
		return () => window.removeEventListener("resize", updateValue);
	}, []);
	return windowWidth;
};

export default useWindowWidth;
