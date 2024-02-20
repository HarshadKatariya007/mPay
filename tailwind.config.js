/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  darkMode: 'class',
  theme: {

    colors :
    {
      'bg-one':'#7F27FF',
      'bg-two':'#9F70FD',
      'txt-white':'#FFFFFF',
      'input-box':'#f5f6f7ff',
      'txt-g':'#958F9F',
      'txt-black':'#000000',
      'txt-card-txt':'#ffffffb3',
      'dark-txt':'#17161b',
      'box-color':'#9fa8be',
      'txt-red':'#FF0000',
      'light-txt':'#958f9f',
      'green-txt':'#11a679ff',
      'card-txt':'#9be8deff',
    },
    container:
    {
      screens:
      {
        'sm':'540px',
        'md':'720px',
        'lg':'960px',
        'xl':'1140px',
        '2xl':'1320px',
      },
    },
    extend: {

      fontFamily:
      {
        'lato':["Lato","sans-serif"],
      },
      width:
      {
        'w-custom': '65px',
        
      },
      height:
      {
        'h-custom': '65px',
      },
      translate:
      {
        'translate':'-50%'
      },
    },
  },

}
/* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch */
