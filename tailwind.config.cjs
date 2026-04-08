module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5',   // indigo-600
          hover: '#4338ca',     // indigo-700
          light: '#818cf8',     // indigo-400
        },
      },
      borderRadius: {
        card: '0.75rem',       // rounded-xl (12px)
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: []
}
