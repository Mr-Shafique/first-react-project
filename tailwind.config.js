/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        poppins:['Poppins'],
      },
      height: {
        custom: 'calc(100vh - 40px)',
      },
    },
  },
  plugins: [],
}

