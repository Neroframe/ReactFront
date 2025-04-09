const path = require('path');

module.exports = {
  input: ['src/**/*.{js,jsx}'],
  output: path.resolve(__dirname, 'public/locales/$LOCALE/$NAMESPACE.json'),
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx']
    },
    trans: {
      component: 'Trans',
      extensions: ['.js', '.jsx']
    },
    lngs: ['en', 'ru', 'kz'], // ТОЛЬКО эти языки
    ns: ['translation', 'about'],
    defaultLng: 'ru',
    defaultNs: 'translation',
    resource: {
      loadPath: path.resolve(__dirname, 'public/locales/{{lng}}/{{ns}}.json'),
      savePath: path.resolve(__dirname, 'public/locales/{{lng}}/{{ns}}.json'),
      jsonIndent: 2
    }
  }
};