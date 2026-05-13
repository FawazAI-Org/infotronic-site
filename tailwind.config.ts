import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slateblue: '#1e293b',
        accent: '#0f7a4f',
        accentdark: '#0b5c3c',
        soft: '#f8fafc',
      },
    },
  },
  plugins: [],
};

export default config;
