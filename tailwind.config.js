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

      boxShadow: {
        '3xl': '0px 5px 5px 1px rgba(33, 41, 43, 0.5);',
        'warm': 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        'cold': 'rgba(0, 0, 0, 1) 0px 2px 5px 0px',
        'inner': 'inset 0px 4px 4px 0 #00000036;',
        'innercold': 'inset 0px 4px 4px 0 #000000;',
      },

    },
  },
  plugins: [],
}

