import checkNode from 'cli-check-node';
import unhandled from 'cli-handle-unhandled';

import welcome from 'cli-welcome';

const init = (init) => {
  unhandled();
  welcome({
    title: init.pkg?.name,
    tagLine: 'Nice to meet you',
    description: init.pkg?.description,
    version: init.pkg?.version,
    bgColor: '#00bcd4',
    color: '#ffffff',
    bold: true,
    clear: true,
  });

  checkNode();
};

export default init;
