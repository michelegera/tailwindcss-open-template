module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      black: "#151719",
      white: "#eceded",

      gray: {
        500: "#9ca9b3",
        600: "#2a2d32",
        700: "#33363a",
        800: "#25282c",
      },

      green: {
        300: "#73efcc",
        400: "#1cb68b",
      },

      indigo: {
        400: "#acadff",
        500: "#6b6dff",
        600: "#6163ff",
        700: "#5658dd",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
      disableUnusedFeatures: true,
    }),
    require("tailwindcss-animatecss")({
      classes: ["animated", "fadeIn", "fadeInUp"],
    }),
  ],
};
