/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'powder-blue': '#ACC8E5',
        'prussian-blue': '#112A46',
        'melon': '#FFB8B8',
        'gunmetal': '#002129',
      },

    },
  },
  plugins: [],
}

