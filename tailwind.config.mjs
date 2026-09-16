/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Fundos
        ink: "#3A2A20", // marrom café principal
        inkdeep: "#241914", // marrom bem escuro para header/nav

        // Textos
        parchment: "#F4E8D2", // creme/bege claro
        sage: "#B8A58C", // bege acinzentado para textos secundários

        // Destaque
        amber: "#D8892B", // laranja queimado/dourado

        // Texto escuro
        char: "#2A1B14", // marrom quase preto
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "serif"],
        body: ['"Work Sans"', "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
