module.exports = {
    input: ['src/**/*.{js,jsx,ts,tsx}'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    options: {
      debug: true,
      sort: true,
      func: {
        list: ['t'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      trans: {
        component: 'Trans',
        i18nKey: 'i18nKey',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      lngs: ['en', 'ru', 'kz'],
      ns: [
        'about',
        'contact',
        'faces',
        'home',
        'industries',
        'insights',
        'investors',
        'layerfive',
        'layerfour',
        'layerone',
        'layersix',
        'layerthree',
        'layertwo',
        'news',
        'partnerspage',
        'requestpage',
        'services'
      ],
      defaultLng: 'ru',
      defaultNs: 'home',
      resource: {
        loadPath: 'public/locales/{{lng}}/{{ns}}.json',
        savePath: 'public/locales/{{lng}}/{{ns}}.json',
        jsonIndent: 2,
      },
      keySeparator: '.',
      nsSeparator: false,
      interpolation: {
        prefix: '{{',
        suffix: '}}'
      }
    }
  };
  