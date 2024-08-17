/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      logo: ['SBAggroB'],
      title: ['GmarketSans']
    },
    extend: {
      colors: {
        button: {
          primary: "#000",
          secondary: "#808080",
          danger: "#C22D40",
        },
        team: {
          kia: "#440011",
          samsung: "#1D67B2",
          lg: "#C22D40",
          doosan: "#012561",
          ssg: "#65615E",
          kt: "#000000",
          nc: "#1A4484",
          hanhwa: "#EF563A",
          lotte: "#092346",
          kiwoom: "#801C26",
        },
        text: {
          primary: "#000000",
          secondary: "#2D3748",
          muted: "#A0AEC0",
        },
        border: {
          light: "#D9D9D9",
          dark: "#2D3748",
        },
        login: {
          border: "#A9A9A9",
          text: "#888"
        }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
