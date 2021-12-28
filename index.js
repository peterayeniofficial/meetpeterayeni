#!/usr/bin/env node

import meow from 'meow';
import alert from 'cli-alerts';
import handleError from 'cli-handle-error';

import cli from './utils/cli.js';
const log = console.log;
import init from './utils/init.js';
import { data } from './utils/data.js';
const { social, bio, ad } = data;

const input = cli.input;
const flags = cli.flags;
const pkg = cli.pkg;

(async () => {
  init(pkg, flags.minimal, flags.clear);
  input.includes('help') && cli.showHelp(0);
  flags.bio && log(bio);
  flags.social && log(social);
  flags.ad && alert({ type: 'info', msg: ad });
  if (flags.debug) {
    alert({ type: 'warning', msg: 'Debug mode is on' });
    alert({ type: 'info', msg: 'CLI DATA' });
    log(`input:`, input);
    log(`flags: `, flags);
    log();
  }
})();
