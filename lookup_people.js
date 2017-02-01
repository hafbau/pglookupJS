const db = require('./test_script');

const input = process.argv[2];

const query = `SELECT * FROM famous_people WHERE\
                first_name = '${input}' OR last_name = '${input}';`;

console.log(query);

db.connect((error, conn) => {
  if (error) {
    throw error;
  }
  console.log('Connection made...Searching..');
  conn.query(query, (err, data) => {
    const list = data.rows;
    console.log(`Found ${list.length} person(s) by the name '${input}':`);
    list.forEach((row, num) => {
      console.log(`- ${num + 1}: ${row.first_name} ${row.last_name}, born '${row.birthdate.toDateString()}'`);
    });
    conn.end();
  });
});

