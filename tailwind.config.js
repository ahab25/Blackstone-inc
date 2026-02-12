/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackstone-black': '#000000',
        'blackstone-yellow': '#FFD700',
        'blackstone-yellow-dark': '#FFC107',
        'blackstone-yellow-light': '#FFF9C4',
        'blackstone-gray': '#1a1a1a',
        'blackstone-gray-light': '#2d2d2d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

