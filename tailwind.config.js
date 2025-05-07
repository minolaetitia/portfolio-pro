/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#f0f0f0',
        accent: '#8B5CF6'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'sans-serif']
      }
    }
  },
  plugins: []
}