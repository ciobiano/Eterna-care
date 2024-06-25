import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "#D51D12",
					secondary: "#EF4A32",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				theme: {
					DEFAULT: "#FBFBFB",
					foreground: "#F9F9F9",	
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				bounce: {
					"0%": {
						opacity: "0",
						transform: "translateY(-35px)",
						animationTimingFunction: "ease-in",
					},
					"24%": { opacity: "1" },
					"40%": {
						transform: "translateY(-24px)",
						animationTimingFunction: "ease-in",
					},
					"65%": {
						transform: "translateY(-12px)",
						animationTimingFunction: "ease-in",
					},
					"82%": {
						transform: "translateY(-6px)",
						animationTimingFunction: "ease-in",
					},
					"93%": {
						transform: "translateY(-4px)",
						animationTimingFunction: "ease-out",
					},
					"25%, 55%, 75%, 87%, 96%, 99%": {
						transform: "translateY(-0.75px)",
						animationTimingFunction: "ease-out",
					},

					"100%": {
						opacity: "1",

						transform: "translateY(-0.80px)",
						animationTimingFunction: "ease-out ",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"bounce-custom": "bounce 4s linear 0s 1 normal forwards ",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
