module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    fontSize: {
      tiny: "0.625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      button: "var(--color-button-text)",
      transparent: "transparent",
      primary: {
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",

        // 900: "var(--color-primary-100)",
        // 800: "var(--color-primary-200)",
        // 700: "var(--color-primary-300)",
        // 600: "var(--color-primary-600)",
        // 300: "var(--color-primary-700)",
        // 200: "var(--color-primary-800)",
        // 100: "var(--color-primary-900)",
      },
      secondary: {
        DEFAULT: "var(--color-secondary)",
        "washed-out": "var(--color-secondary-washed-out)",
      },
      accent: {
        DEFAULT: "var(--color-accent)",
        hover: "var(--color-accent-hover)",
        disabled: "var(--color-accent-disabled)",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {
      borderRadius: {
        5: "5px",
        8: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
