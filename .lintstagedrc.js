const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  filenames.map((f) => `prettier --write "${path.relative(process.cwd(), f)}"`);

module.exports = {
  'backend/**/*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  'backend/**/*.{json,scss}': [buildPrettierCommand],
};
