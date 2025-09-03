// Design tokens and theme constants for consistent styling

export const colors = {
  primary: '#8b5cf6', // Purple
  primaryLight: '#a78bfa',
  accent: '#f59e0b', // Amber
  heading: '#1f2937', // Gray-800
  text: '#374151', // Gray-700
  textLight: '#6b7280', // Gray-500
  background: '#ffffff',
  backgroundAlt: '#f9fafb', // Gray-50
  cardBorder: '#e5e7eb', // Gray-200
  divider: '#d1d5db', // Gray-300
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem', 
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const;

export const typography = {
  fontFamily: {
    serif: 'ui-serif, Georgia, "Times New Roman", serif',
    sans: 'ui-sans-serif, system-ui, sans-serif',
    mono: 'ui-monospace, "Courier New", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const transitions = {
  default: '0.3s ease',
  fast: '0.2s ease',
  slow: '0.5s ease',
} as const;

export const zIndex = {
  modal: 1000,
  navigation: 50,
  dropdown: 100,
} as const;