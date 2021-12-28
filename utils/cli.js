import meow from 'meow';
import chalk from 'chalk';

// chalk methods
const green = chalk.green;
const cyan = chalk.cyan;
const yellow = chalk.yellow;
const dim = chalk.dim;

const helpText = `	
    Usage
        ${green(`npx peterayeni`)} ${cyan(`<command>`)} ${yellow(`[options]`)}

    Options
        ${yellow(`--social`)}        Print the social info ${dim(
  `(DEFAULT: true)`
)}
        ${yellow(`--no-social`)}     Don't print the social info
        ${yellow(`--ad`)}            Print the ad info ${dim(`DEFAULT: true`)}
        ${yellow(`--no-ad `)}        Don't Print the ad info
        ${yellow(`--clear`)}         Clear the Console ${dim(`DEFAULT: true`)}
        ${yellow(`--no-clear`)}      Don't clear the Console
        ${yellow(`-d`)}, ${yellow(`--debug `)}    Print debug info
        ${yellow(`-m`)}, ${yellow(`--minimal `)}  Print minimal info
        ${yellow(`-b`)}, ${yellow(`--bio `)}      Print the bio ${dim(
  `(DEFAULT: true)`
)}

    Commands
        ${cyan(`help`)}            Print CLI help information

    Examples
        ${green(`npx peterayeni`)} ${yellow(`--no-social`)}
        ${green(`npx peterayeni`)} ${yellow(`--ad`)}
`;
const options = {
  importMeta: import.meta,
  flags: {
    bio: {
      type: 'boolean',
      alias: 'b',
      default: true,
    },
    minimal: {
      type: 'boolean',
      alias: 'm',
    },
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd',
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v',
    },
    clear: {
      type: 'boolean',
      default: true,
    },
  },
};

const cli = meow(helpText, options);
export default cli;
