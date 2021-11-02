#!/usr/bin/env node
const log = console.log;
const init = require('./utils/init');
const data = require('./utils/data');

(() => {
  init();
  log(data.bio);
})();
