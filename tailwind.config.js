/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/ui/**/*.tsx"],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				border: "var(--text-normal)",
				background: "var(--background-primary)",
				foreground: "var(--text-normal)",
				primary: {
					DEFAULT: "var(--color-orange)",
					foreground: "var(--text-normal)",
				},
				secondary: {
					DEFAULT: "var(--color-blue)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--color-red)",
					foreground: "var(--text-normal)",
				},
				muted: {
					DEFAULT: "var(--background-primary)",
					foreground: "var(--text-muted)",
				},
				accent: {
					DEFAULT:
						"hsl(var(--accent-h) var(--accent-s) var(--accent-l))",
					foreground: "var(--text-on-accent)",
				},
				card: {
					DEFAULT: "var(--background-secondary)",
					foreground: "var(--text-normal)",
				},
			},
			borderRadius: {
				xl: "var(--radius-xl)",
				lg: "var(--radius-lg)",
				md: "var(--radius-m)",
				sm: "var(--radius-s)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
