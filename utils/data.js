const chalk = require('chalk');

// chalk methods
const boldBlue = chalk.bold.blue;
const dimItalic = chalk.dim.italic;
const linkedIn = chalk.hex('#8d6cab').bold;
const twitter = chalk.hex('#1da1f2').bold;
const github = chalk.hex('#6cc644').bold;
const blog = chalk.bold.green;
const website = chalk.bold.cyan;
const youTube = chalk.hex('#ff0000').bold;

const social = `
${blog(`Blog`)}:   ${chalk.dim('https://thepeterayeni.medium.com/')}
${linkedIn(`LinkedIn`)}: ${chalk.dim('https://www.linkedin.com/in/peterayeni/')}
${youTube(`YouTube`)}: ${chalk.dim(
    'https://www.youtube.com/channel/UC6bYkP764Tdbi1N904T2Fvw'
  )}
${twitter(`Twitter`)}:  ${chalk.dim('https://twitter.com/peterayeni')}
${github(`Github`)}:   ${chalk.dim('https://github.com/peterayeniofficial')}
${website(`Website`)}:   ${chalk.dim('https://peterayeni.dev')}

`;

const bio = `
${boldBlue('Peter Ayeni')}
Software Engineer

${dimItalic(`Peter is an award-winning Social Innovator, Software Engineer, and Mentor passionate about 
using design and technology for social good. He has worked as a Technical Mentor for Udacity React
 Nanodegree, and Frontend Developer at Previsico. He has an International Diploma in Computing 
 from Informatics Singapore and a BBA in IT Security from SMC Switzerland.`)}
`
const ad = `Check out my Upcoming Training: `;

module.exports = {
  social,
  bio,
  ad,
};
