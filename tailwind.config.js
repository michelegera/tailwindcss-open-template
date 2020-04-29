module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'black': '#151719',
        'gray-500': '#9ca9b3',
        'gray-600': '#2a2d32',
        'gray-700': '#33363a',
        'gray-800': '#25282c',
        'green-300': '#73efcc',
        'green-400': '#1cb68b',
        'indigo-400': '#acadff',
        'indigo-500': '#6b6dff',
        'indigo-600': '#6163ff',
        'indigo-700': '#5658dd',
        'white': '#eceded',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true,
      disableUnusedFeatures: true,
    })
  ],
}
