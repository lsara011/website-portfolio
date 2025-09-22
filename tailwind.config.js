export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#ef4444',
        'white': '#ffffff',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      padding: {
        '6': '1.5rem',
      },
      boxShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      textAlign: {
        'center': 'center',
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"], // 👈 ADD THIS
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
