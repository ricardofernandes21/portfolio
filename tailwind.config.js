export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#001835",
        "primary-dim": "rgb(var(--color-primary-dim) / <alpha-value>)",
        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
        "inverse-on-surface":
          "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
        "secondary-fixed-dim": "#58e7ab",
        "tertiary-fixed": "#80b2ff",
        "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "primary-container":
          "rgb(var(--color-primary-container) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--color-surface-container-highest) / <alpha-value>)",
        "surface-container":
          "rgb(var(--color-surface-container) / <alpha-value>)",
        "on-secondary-fixed-variant": "#006544",
        "primary-fixed": "#00e3fd",
        "on-secondary-container":
          "rgb(var(--color-on-secondary-container) / <alpha-value>)",
        "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "secondary-dim": "rgb(var(--color-secondary-dim) / <alpha-value>)",
        "tertiary-fixed-dim": "#65a4ff",
        "on-primary-container":
          "rgb(var(--color-on-primary-container) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "primary-fixed-dim": "#00d4ec",
        "on-secondary-fixed": "#00452d",
        "secondary-container":
          "rgb(var(--color-secondary-container) / <alpha-value>)",
        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
        "secondary-fixed": "#69f6b8",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "on-primary-fixed": "#003840",
        "surface-container-high":
          "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "tertiary-container":
          "rgb(var(--color-tertiary-container) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        "inverse-primary": "rgb(var(--color-inverse-primary) / <alpha-value>)",
        "error-dim": "rgb(var(--color-error-dim) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        "on-primary-fixed-variant": "#005762",
        "on-surface-variant":
          "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-surface) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
        "on-tertiary-fixed-variant": "#003971",
        "tertiary-dim": "rgb(var(--color-tertiary-dim) / <alpha-value>)",
        "on-error-container":
          "rgb(var(--color-on-error-container) / <alpha-value>)",
        "on-tertiary-container":
          "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Inter"],
        label: ["Manrope"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
