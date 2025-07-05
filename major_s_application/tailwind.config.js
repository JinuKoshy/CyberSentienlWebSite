module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)"
        },
        header: {
          text1: "var(--header-text-1)",
          text2: "var(--header-text-2)"
        },
        button: {
          background1: "var(--button-bg-1)",
          background2: "var(--button-bg-2)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};