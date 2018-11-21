const assert = require('assert');
const Todo = require('./todo');
const todo = new Todo();
let testsCompleted = 0;

function deleteTest() {
  todo.add('Delete Me');
  assert.equal(todo.length, 1, '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.length, 0, "No items should exist");
  testsCompleted++;
}

deleteTest();
