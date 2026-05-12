import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slateblue: '#1e293b',
        accent: '#2563eb',
        soft: '#f8fafc',
      },
    },
  },
  plugins: [],
};

export default config;
