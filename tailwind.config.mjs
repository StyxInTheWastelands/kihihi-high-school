/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We can map your premium school color tokens right here!
        brand: {
          cream: '#FDFBD7',
          brown: '#815E35',
          dark: '#4A351E',
        }
      },
    },
  },
  plugins: [],
}