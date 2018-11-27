const fs = require('fs');
const events = require('events');

class Watcher extends events.EventEmitter {
  constructor(watchDir, processedDir) {
    super();
    this.watchDir = watchDir;
    this.processedDir = processedDir;
  }

  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err;
      for (var index in files) {
        this.emit('process', files[index]);
      }
    });
  }

  start() {
    console.log('xxxxxxx');
    console.log(this.watchDir);
    this.watch();
  }
}

module.exports = Watcher;