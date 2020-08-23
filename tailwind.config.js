module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				"light-shades": {
					50: "#FFFEFF",
					100: "#FEFEFE",
					200: "#FDFCFD",
					300: "#FBFBFC",
					400: "#F9F7F9",
					500: "#F6F4F7",
					600: "#DDDCDE",
					700: "#949294",
					800: "#6F6E6F",
					900: "#4A494A",
				}, // whisper
				"light-accent": {
					50: "#FBFAFA",
					100: "#F7F6F5",
					200: "#EAE8E5",
					300: "#DDDAD6",
					400: "#C4BEB7",
					500: "#ABA298",
					600: "#9A9289",
					700: "#67615B",
					800: "#4D4944",
					900: "#33312E",
				}, // cloudy
				"main-brand-color": {
					50: "#FDF7F7",
					100: "#FBEFEF",
					200: "#F4D7D7",
					300: "#EDBFBF",
					400: "#E08F90",
					500: "#D35F60",
					600: "#BE5656",
					700: "#7F393A",
					800: "#5F2B2B",
					900: "#3F1D1D",
				}, // chestnut-rose
				"dark-accent": {
					50: "#FAF9F9",
					100: "#F4F4F4",
					200: "#E4E3E3",
					300: "#D4D2D2",
					400: "#B3B1B0",
					500: "#938F8E",
					600: "#848180",
					700: "#585655",
					800: "#424040",
					900: "#2C2B2B",
				}, // schooner
				"dark-shades": {
					50: "#FAF8FE",
					100: "#F5F2FD",
					200: "#E7DEFA",
					300: "#D9CAF7",
					400: "#BCA2F0",
					500: "#9F7AEA",
					600: "#8F6ED3",
					700: "#5F498C",
					800: "#483769",
					900: "#302546",
				}, // blackcurrent
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
		textColor: ["responsive", "hover", "focus", "active"],
		svgFill: ["responsive", "hover"],
		svgStroke: ["focus"],
		borderCollapse: ["responsive", "hover", "focus"],
		borderColor: ["responsive", "hover", "focus"],
		borderOpacity: ["responsive", "hover", "focus"],
		borderRadius: ["responsive", "hover", "focus"],
		borderStyle: ["responsive", "hover", "focus"],
		borderWidth: ["responsive", "hover", "focus"],
		width: ["responsive", "hover", "focus"],
	},
	plugins: [],
	modules: {
		svgFill: ["responsive", "hover"],
		svgStroke: ["focus"],
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
};

/**
 * Color Semantics
 * Bootstrap's UI colors contain semantic information and shouldn't be changed
 * arbitrarily. However we can tweak them to better fit the color palette.
 * Chestnut Rose	#d25e5f	Primary
 * Blackcurrant	#362d40	Info
 * Asparagus	#749755	Success
 * Carrot Orange	#f2871d	Warning
 * Pomegranate	#f44336	Danger
 */

/**
 * whisper => F6F4F7
 * cloudy => ABA29B
 * chestnut rose => D35F60
 * schooner => 938F8E
 * blackcurrant => 362D40
 */
