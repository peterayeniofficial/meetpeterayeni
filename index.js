#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

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

console.log(`
Peter Ayeni
Software Engineer

Peter is an award-winning Social Innovator, Software Engineer, and Mentor passionate about using design and technology for social good. He has worked as a Technical Mentor for Udacity React Nanodegree, and Frontend Developer at Previsico. He has an International Diploma in Computing from Informatics Singapore and a BBA in IT Security from SMC Switzerland.

LinkedIn: https://www.linkedin.com/in/peterayeni/
Twitter:  https://twitter.com/thepeterayeni
Github:   https://github.com/peterayeniofficial

`);
