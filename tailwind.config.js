/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      fontFamily: {
        MotivaSans: ['MotivaSansRegular', 'sans-serif'],
        MotivaSansBold: ['MotivaSansBold', 'sans-serif'],
        MotivaSansLight: ['MotivaSansLight', 'sans-serif'],
        MotivaSansMedium: ['MotivaSansMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

