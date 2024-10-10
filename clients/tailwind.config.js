/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        oval:"url('/oval.png')",
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
        mavenPro: ['Maven Pro'],
        poppins: ['Poppins'],
        lato: ['Lato'],
        cormorantGaramond: [' Cormorant Garamond '],
        outfit: ['Outfit']
       },
       backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        70: '70%',
        80: '80%',
        90: '90%',

      },
     
    },
  },
  plugins: [],
};
