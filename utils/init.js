const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');

module.exports = () => {
  unhandled();
  welcome({
    title: pkgJSON.name,
    tagLine: 'Nice to meet you',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: '#00bcd4',
    color: '#ffffff',
    bold: true,
    clear: true,
  });

  checkNode();
};
