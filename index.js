#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log;

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

log(`
${chalk.bold.blue('Peter Ayeni')}
Software Engineer

${chalk.dim
  .italic(`Peter is an award-winning Social Innovator, Software Engineer, and Mentor passionate about using design and technology for social good. He has worked as a Technical Mentor for Udacity React Nanodegree, and Frontend Developer at Previsico. He has an International Diploma in Computing from Informatics Singapore and a BBA in IT Security from SMC Switzerland.
`)}
${chalk.hex('#8d6cab').bold(`LinkedIn`)}: ${chalk.dim(
  'https://www.linkedin.com/in/peterayeni/'
)}
${chalk.hex('#1da1f2').bold(`Twitter`)}:  ${chalk.dim(
  'https://twitter.com/peterayeni'
)}
${chalk.hex('#6cc644').bold(`Github`)}:   ${chalk.dim(
  'https://github.com/peterayeniofficial'
)}

`);
