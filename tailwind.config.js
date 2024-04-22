/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "belowHeader": 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)',
        "gradient": 'var(--gradient-bg)',
        "gradient-experience-1": "linear-gradient(180deg,#00c2ff,#ff29c3)",
        "gradient-experience-2": "linear-gradient(180deg,#184bff,#174aff)",
        "white-gradient": "linear-gradient(180deg, #fff, #b7b7b7)",
      }
    },
  },
  plugins: [],
};