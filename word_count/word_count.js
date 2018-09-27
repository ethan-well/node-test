var fs = require('fs');
var completedTasks = 0;
var tasks = [];
var wordCounts = {};
var filesDir = './test';

function checkIfComplete() {
  completedTasks ++;
  if (completedTasks == tasks.length) {
    console.log('all task completed!');
  }
}

fs.readdir(filesDir, function(err, files) {
  if (err) {
    console.log(err);
  }
  for(var index in files) {
    var task = (function(file) {
      return function() {
        fs.readFile(file, function(err, data) {
          if (err) console.log('some error when read: ' + file);
          console.log(data.toString());
          checkIfComplete();
        });
      }
    })(filesDir + '/' + files[index]);
    tasks.push(task);
  }

  for(var task in tasks) {
    tasks[task]();
  }
});
