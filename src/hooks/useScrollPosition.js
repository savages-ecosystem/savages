import { useState, useEffect } from "react";

const useScrollPosition = () => {
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		const updateValue = () => {
			setScrollValue(window.scrollY);
		};
		window.addEventListener("scroll", updateValue);
		updateValue();
		return () => window.removeEventListener("scroll", updateValue);
	}, []);
	return scrollValue;
};

export default useScrollPosition;
