const pg = require('pg');
const db = new pg.Client({ database: 'articles' });

db.connect((err, client) => {
  if (err) console.log(err);
  console.log('connect to database', db.database);
  db.end();
});