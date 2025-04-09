const fs = require("fs");
const path = require("path");

const languages = ["en", "ru", "kz"];
const pagesDir = path.join(__dirname, "../src/pages");
const outputDir = path.join(__dirname, "../public/locales");

const pageFiles = fs.readdirSync(pagesDir).filter((file) => file.endsWith(".jsx"));

pageFiles.forEach((file) => {
  const namespace = path.basename(file, ".jsx").toLowerCase();

  languages.forEach((lang) => {
    const langDir = path.join(outputDir, lang);
    const targetFile = path.join(langDir, `${namespace}.json`);

    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    if (!fs.existsSync(targetFile)) {
      fs.writeFileSync(targetFile, JSON.stringify({}, null, 2), "utf8");
      console.log(`✅ Created ${lang}/${namespace}.json`);
    } else {
      console.log(`⚠️ Already exists: ${lang}/${namespace}.json`);
    }
  });
});
