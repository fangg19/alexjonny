/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "primary-white": "#E5E5E5",
        "primary-black": "#171717",
        "primary-gray": "#353535",
        "primary-accent": "#8B5CF6",
      },


     keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeInLeftLine: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        fadeInRightLine: {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        rotateClose: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },

        moveToRight: {
          "0%": {
            transform: "translateX(-80px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        hideAfterMove: {
          "0%": {
            width: "100px"
          },
          "99%": {
            width: "100px"
          },
          "100%": {
            width: "0px !important"
          },
        },
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out",
        fadeInRight: "fadeInRight 0.5s ease-in-out",
        fadeInUp: "fadeInUp 0.5s ease-in-out",
        fadeInDown: "fadeInDown 0.5s ease-in-out",
        fadeInLeftLine: "fadeInLeftLine 1.5s ease-in-out",
        fadeInRightLine: "fadeInRightLine 1.5s ease-in-out",
        rotateClose: "rotateClose 0.8s ease-in-out",
        moveToRight: "moveToRight 2s ease-in-out",
        hideAfterMove: "hideAfterMove 2s ease-in-out",
      },


    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
