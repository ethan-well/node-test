const Watcher = require('./watcher.js');
const fs = require('fs');

const watchDir = '/Users/wewin/workspace/watch';
const processFile = '/Users/wewin/workspace/done';

const watcher = new Watcher(watchDir, processFile);
watcher.on('process', (file) => {
  const watchFile = `${watchDir}/${file}`;
  const processFile = `${processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processFile, err => {
    if (err) throw err;
  });
});

watcher.start();