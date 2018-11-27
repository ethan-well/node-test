const Watcher = require('./watcher.js');

const watcher = new Watcher('/Users/wewin/workspace/watch', '/Users/wewin/workspace/done');
watcher.on('process', (file) => {
  const watchFile = `${watchDir}/${file}`;
  const processFile = `${processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processFile, err => {
    if (err) throw err;
  });
});

watcher.start();