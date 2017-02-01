
exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestones', (table) => {
    table.increments();
    table.string('description');
    table.date('date_achieved');
    table.integer('famous_people_id');
    table.foreign('famous_people_id')
    .references('famous_people.id').onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones');
};
