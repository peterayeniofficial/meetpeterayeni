import checkNode from 'cli-check-node';
import unhandled from 'cli-handle-unhandled';
import boxen from 'boxen';
import welcome from 'cli-welcome';

const init = (pkgData, minimal, clear) => {
  unhandled();
  !minimal &&
    welcome({
      title: pkgData.name,
      tagLine: 'Nice to meet you',
      description: pkgData.description,
      version: pkgData.version,
      bgColor: '#00bcd4',
      color: '#ffffff',
      bold: true,
      clear,
    });

  minimal && console.log(boxen(`Peter Ayeni`, { padding: 1 }));

  checkNode();
};

export default init;
