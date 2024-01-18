import colors from 'tailwindcss/colors'

export default {
  donateButtonColor: {
    default: '#d97706',
    hover: '#b45309',
    glow: '#f59e0b'
  },
  accentColor: {
    ...colors.green
  },
  baseColor: {
    ...colors.gray
    // if you want to use fully custom colors, define them like this:
    // '50': '#f9fafb',
    // '100': '#f3f4f6',
    // '200': '#e5e7eb',
    // '300': '#d1d5db',
    // '400': '#9ca3af',
    // '500': '#6b7280',
    // '600': '#4b5563',
    // '700': '#374151',
    // '800': '#1f2937',
    // '900': '#111827',
    // '950': '#030712'
  }
}
