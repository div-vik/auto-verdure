/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryMain: "#9A5CF5",
        secondaryMain: "#809D79",
        tertiaryMain: "#F9ECDD",
        successAlerts: "#00C566",
        errorAlerts: "#FF4747",
        warningAlerts: "#FACC15",
        primaryGrayscale: "#3D3D3D",
        secondaryGrayscale: "#6F6E73",
      },
    },
  },
  plugins: [],
};
