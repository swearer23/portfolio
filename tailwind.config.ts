module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui'), require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["light"],
  },
};