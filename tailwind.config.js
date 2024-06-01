/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"noti-white": "hsl(0, 0%, 100%)",
				"notie-light-grayish-blue": "hsl(210, 60%, 98%)",
				"notie-blue": "hsl(219, 85%, 26%)",
				"notie-red": "hsl(1, 90%, 64%)",
			},
			textColor: {
				"notie-white": "hsl(0, 0%, 100%)",
				"notie-blue": "hsl(219, 85%, 26%)",
			},
		},
	},
	plugins: [],
};
