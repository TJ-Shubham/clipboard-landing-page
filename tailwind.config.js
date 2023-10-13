/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        display:['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage:{
        'pattern':"url('/images/bg-header-mobile.png')",
        'hero-pattern':"url('/images/bg-header-desktop.png')",
      },
      colors:{
        'color1':'hsl(210, 10%, 33%)',
        'color2':'hsl(201, 11%, 66%)',
        'color3':'hsl(171, 66%, 44%)',
        'color4':'hsl(233, 100%, 69%)',
      },
      boxShadow:{
        '4xl':'0 4px 7px 0 hsl(171, 66%, 44%)',
        '5xl':'0 4px 7px 0 hsl(233, 100%, 69%)',
      },
    },
  },
  plugins: [],
}

