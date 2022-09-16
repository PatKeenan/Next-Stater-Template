/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        light: 'var(--light)',
        'light-accent': 'var(--light-accent)',
        primary: 'var(--primary)',
        dark: 'var(--dark)',
        'dark-accent': 'var(--dark-accent)',
        success:  'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
