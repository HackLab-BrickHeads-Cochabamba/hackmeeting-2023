const defaultTheme = require("tailwindcss/defaultTheme");
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        strong: ["Russo One"]
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)"
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type"), addDynamicIconSelectors()],
};
