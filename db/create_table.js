const pg = require('pg');
const db = new pg.Client({ database: 'articles' });

db.connect((err, client) => {
  if (err) throw err;
  console.log('connect to database', db.database);
  db.end();
});

db.query(`
  CREATE TABLE IF NOT EXISTES snippets (
    id SERIAL,
    PRIMARY KEY(id),
    body text
  );
  `, (err, result) => {
  if (err) throw err;
  console.log('Create table "snipptes"');
  db.end();
});