/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui"), require("tailwind-scrollbar")],
	daisyui: {
		themes: ["lofi"],
	},
	theme: {
		extend: {
			animation: {
				logoAnimation: "logo-animation 200ms linear",
			},
			keyframes: {
				"logo-animation": {
					from: {
						width: "0%",
					},
					to: {
						width: "1rem",
					},
				},
			},
		},
	},
};
