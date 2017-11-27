// @flow

const path = require('path');
const minimist = require('minimist');
const promisify = require('promisify-node');
const Mustache = require('mustache');
const fs = require('fs');

const mkdirp = require('mkdirp-promise');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);

const {
  name,
  height,
  width,
  viewBox
} = minimist(process.argv);

/*
 * Filepaths
 */

const pathToNewIcon = path.join(path.resolve(), 'src', 'components', 'Icons', name);
const pathToNewIconFile = path.join(pathToNewIcon, `${name}.jsx`);
const pathToIconTemplate = path.join(__dirname, 'templates', 'icon.mustache');

console.log(name);
console.log(pathToNewIcon);
console.log(pathToNewIconFile);
console.log(pathToIconTemplate);

/*
 * Build Icon
 */

const render = (template, { name, height = '32', width = '32', viewBox = '0 0 32 32' }) => {
  return Mustache.render(template, { name, height, width, viewBox });
}

mkdirp(pathToNewIcon)
  .then(() => readFile(pathToIconTemplate, 'utf-8'))
  .then((template) => {
    return writeFile(
      pathToNewIconFile,
      render(template, { name, height, width, viewBox }),
      'utf-8'
    );
  })
  .then(() => {
    console.log('Created your new icon!');
  })
  .catch(console.warn);
