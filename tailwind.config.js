module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true,
      disableUnusedFeatures: true,
    })
  ],
}
