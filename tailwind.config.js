/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors : {
        'nav-pink': '#E89689',
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
      }
    },
    screens:{
      xs : '480px',
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1280px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

