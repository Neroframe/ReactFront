const path = require("path");

module.exports = {
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "./public/locales",
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: false, // don’t delete existing translations
    func: {
      list: ["t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    lngs: ["en", "ru", "kz"],
    ns: [
      "about",
      "contact",
      "faces",
      "home",
      "industries",
      "insights",
      "investors",
      "layerfive",
      "layerfour",
      "layerone",
      "layersix",
      "layerthree",
      "layertwo",
      "news",
      "partnerspage",
      "requestpage",
      "services"
    ],
    defaultLng: "ru",
    defaultNs: "about",
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n"
    },
    keySeparator: ".",
    nsSeparator: false
  }
};
