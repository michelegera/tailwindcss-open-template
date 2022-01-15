module.exports = {
  content: ["./src/**/*.html"],
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
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  plugins: [require("tailwindcss-font-inter")()],
};
