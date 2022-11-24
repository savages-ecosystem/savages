/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			"2xl": { max: "1535px" },

			xl: { max: "1279px" },

			lg: { max: "1023px" },

			md: { max: "767px" },

			sm: { max: "639px" },
		},
		extend: {
			keyframes: {
				navbar: {
					"0%": {
						backgroundImage: "navbarImage",
					},
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				navbar: "nav ease-in-out",
			},
		},
	},
};
