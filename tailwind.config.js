/** @type {import('tailwindcss').Config} */
import colors from "./src/settings";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-slide": "text-slide 5s infinite",
      },
      keyframes: {
        "text-slide": {
          // "0%, 16%": {
          //   transform: "translateY(0%)",
          // },
          // "20%, 36%": {
          //   transform: "translateY(-16.66%)",
          // },
          // "40%, 56%": {
          //   transform: "translateY(-33.33%)",
          // },
          // "60%, 76%": {
          //   transform: "translateY(-50%)",
          // },
          // "80%, 96%": {
          //   transform: "translateY(-66.66%)",
          // },
          // "100%": {
          //   transform: "translateY(-83.33%)",
          // },
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
      },
      boxShadow: {
        "top-shadow": "0px -4px 3px rgba(50, 50, 50, 0.50)",
      },
      fontSize: {
        huge: "87px",
        mobileHuge: "60px",
        bigger: "70px",
        big: "45px",
        med: "30px",
        small: "23px",
        smaller: "20px",
        tiny: "16px",
      },
      // fontFamily: {
      //   REG: "LAMASANSREGULAR", //400(normal)
      //   MED: "LAMASANSMEDIUM", //500
      //   BOLD: "LAMASANSBOLD", //700
      //   EXBOLD: "LAMASANSEXTRABOLD", //800
      // },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        third: colors.third,
        fourth: colors.fourth,
        fifth: colors.fifth,
      },
      backgroundImage: {
        buttonGrad:
          "linear-gradient(110deg, #DDB26E 13.14%, #FFE0AE 49.03%, #EFC27C 88.87%)",
        ServicesBackGround:
          "linear-gradient(92deg, rgba(90, 90, 90, 0.40) 15.42%, rgba(95, 95, 95, 0.26) 100.94%)",
      },
      backgroundColor: {},
      background: {},
    },
  },
  plugins: [],
};
