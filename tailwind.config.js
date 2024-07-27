/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      },
      screens: {
        des: "1440px",
      },
    },
  },
  plugins: [],
};
