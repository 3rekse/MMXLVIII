//** @type {import('next').NextConfig} */
//const nextConfig = {
//  distDir: "build",
 // reactStrictMode: true,
//};

//module.exports = nextConfig;
// filepath: next.config.js
module.exports = {
  // Abilita l'aggiunta di una barra finale a tutte le URL generate
  trailingSlash: true,
  
  // Imposta il prefisso degli asset in base all'ambiente di esecuzione
  // Se l'ambiente è di produzione, utilizza '/MMXLVIII/' come prefisso
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MMXLVIII/' : '',
  
  // Imposta il percorso base per tutte le pagine
  // Se l'ambiente è di produzione, utilizza '/MMXLVIII' come percorso base
  basePath: process.env.NODE_ENV === 'production' ? '/MMXLVIII' : '',
};