/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16261C',      // fundo principal, verde-oliva quase preto
        inkdeep: '#0F1A13',  // fundo mais escuro (header/nav)
        parchment: '#F1E9D8',// texto claro / papel
        amber: '#C97A2B',    // acento principal
        sage: '#8A9A82',     // texto secundário sobre fundo escuro
        char: '#241D14',     // texto escuro (não usado sobre fundo escuro)
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
