const Watcher = require('./watcher.js');
const fs = require('fs');

const watcher = new Watcher('/Users/wewin/workspace/watch', '/Users/wewin/workspace/done');
watcher.on('process', (file) => {
  const watchFile = `${watcher.watchDir}/${file}`;
  const processFile = `${watcher.processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processFile, err => {
    if (err) throw err;
  });
});

watcher.start();