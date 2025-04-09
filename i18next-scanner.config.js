module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}', // files to scan
  ],
  output: './public/locales',
  options: {
    debug: true,
    func: {
      list: ['t', 'i18next.t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    lngs: ['en', 'kz', 'ru'], // 👈 ONLY these will be created
    defaultLng: 'ru',
    defaultNs: 'about',
    ns: ['about'],
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json', 
      jsonIndent: 2,
      lineEnding: '\n',
    },
    keySeparator: '.',
    nsSeparator: false,
  },
}
