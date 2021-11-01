#!/usr/bin/env node

const chalk = require('chalk');
const handleError = require('cli-handle-error');
const log = console.log;

// chalk methods
const boldBlue = chalk.bold.blue;
const dimItalic = chalk.dim.italic;
const linkedIn = chalk.hex('#8d6cab').bold;
const twitter = chalk.hex('#1da1f2').bold;
const github = chalk.hex('#6cc644').bold;

const init = require('./utils/init');

(() => {
  init();

  log(`
${boldBlue('Peter Ayeni')}
Software Engineer

${dimItalic(`Peter is an award-winning Social Innovator, Software Engineer, and Mentor passionate about using design and technology for social good. He has worked as a Technical Mentor for Udacity React Nanodegree, and Frontend Developer at Previsico. He has an International Diploma in Computing from Informatics Singapore and a BBA in IT Security from SMC Switzerland.
`)}
${linkedIn(`LinkedIn`)}: ${chalk.dim('https://www.linkedin.com/in/peterayeni/')}
${twitter(`Twitter`)}:  ${chalk.dim('https://twitter.com/peterayeni')}
${github(`Github`)}:   ${chalk.dim('https://github.com/peterayeniofficial')}

`);
})();
