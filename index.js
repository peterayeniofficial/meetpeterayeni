#!/usr/bin/env node

import meow from 'meow';
import alert from 'cli-alerts';
import handleError from 'cli-handle-error';

const log = console.log;
import init from './utils/init.js';
import { data } from './utils/data.js';
const { social, bio, ad } = data;

const helpText = `	
Usage
	  npx peterayeni <command> [options]

	Options
	  social      Show the social info
    --no-social Don't show the social info
    ad          Show the ad info
    --no-ad     Don't show the ad info

	Examples
	  npx peterayeni --no-social
`;
const options = {
  importMeta: import.meta,
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
  },
};

const cli = meow(helpText, options);
const input = cli.input;
const flags = cli.flags;

(async () => {
  init(cli);
  log(bio);
  if (flags.social) {
    log(social);
  }
  if (flags.ad) {
    alert({ type: 'info', msg: ad });
  }
})();
