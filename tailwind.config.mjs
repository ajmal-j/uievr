/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1700px",
        xl2: "1620px",
        xl1: "1500px",
        lg2: "1200px",
        lg1: "970px",
        md2: "850px",
        md1: "800px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        samsungSansBold: ["Samsung Sharp Sans Bold", "sans-serif"],
        samsungSansMedium: ["Samsung Sharp Sans Medium", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".centered-wrapper": {
          maxWidth: "1600px",
          margin: "0 auto",
          paddingLeft: "1.75rem", // lg:px-7 (28px)
          paddingRight: "1.75rem", // lg:px-7 (28px)
          paddingTop: "4rem", // lg:py-16 (64px)
          paddingBottom: "4rem", // lg:py-16 (64px)
          "@screen xl": {
            paddingTop: "3rem", // xl:py-12 (48px)
            paddingBottom: "3rem", // xl:py-12 (48px)
          },
          "@screen px": {
            paddingLeft: "1.25rem", // px-5 (20px)
            paddingRight: "1.25rem",
          },
        },
        ".centered-wrapper-custom-padding": {
          maxWidth: "1600px",
          margin: "0 auto",
        },
        ".centered-wrapper-custom-width": {
          margin: "0 auto",
          paddingLeft: "1.75rem", // lg:px-7 (28px)
          paddingRight: "1.75rem",
          paddingTop: "4rem", // lg:py-16 (64px)
          paddingBottom: "4rem",
          "@screen xl": {
            paddingTop: "3rem", // xl:py-12 (48px)
            paddingBottom: "3rem",
          },
          "@screen px": {
            paddingLeft: "1.25rem", // px-5 (20px)
            paddingRight: "1.25rem",
          },
        },
      });
    },
  ],
};
