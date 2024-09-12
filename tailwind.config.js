const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#000000",
        "dark-xl": "#0E0E0E",
        "dark-lg": "#222222",
        "dark-md": "#481E14",
        "dark-sm": "#9B3922",
        "dark-xs": "#F2613F",
        "font-primary": "#e5e7eb",
      },
    },
  },

  plugins: [require("daisyui"), addVariablesForColors],

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#F2613F",
          secondary: "#0E0E0E",
          "primary-dark": "#000000",
          "dark-md": "#481E14",
          "dark-sm": "#9B3922",
          "dark-xs": "#F2613F",
          "font-primary": "#e5e7eb",
        },
      },
    ],
  },
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
