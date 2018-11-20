const pg = require('pg');
const db = new pg.Client({ database: 'articles' });

db.connect((err, client) => {
  if (err) console.log(err);
  console.log('connect to database', db.database);
});

db.query(`
  CREATE TABLE IF NOT EXISTES snippets (
    id SERIAL,
    PRIMARY KEY(id),
    body text
  );
  `, (err, result) => {
  console.log('Create table "snipptes"');
  db.end();
});