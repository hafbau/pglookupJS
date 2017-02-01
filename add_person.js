const input = process.argv.slice(2);

const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname
  }
});

knex('famous_people').insert({
  first_name: input[0],
  last_name : input[1],
  birthdate : input[2]
}).then(() => {
  console.log('INSERTED');
}).then(() => {
knex.destroy();
});