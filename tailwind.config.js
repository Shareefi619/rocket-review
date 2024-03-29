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
      },
    },

    screens: {

      "3xl": { max: "3080px" },
      // => @media (max-width: 3080px) { ... }

     "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "md": { max: "850px" },
      // => @media (max-width: 850px) { ... }

      "sm": { max: "650px" },
      // => @media (max-width: 650px) { ... }

      "xs": { max: "480px" },
      // => @media (max-width: 479px) { ... }
      "xxs": { max: "340px" },
      // => @media (max-width: 340px) { ... }
    },
  },
  plugins: [],
};
