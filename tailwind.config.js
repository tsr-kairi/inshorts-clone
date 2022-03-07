module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0px 0px 15px -10px rgba(0, 0, 0, 0.75),0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
