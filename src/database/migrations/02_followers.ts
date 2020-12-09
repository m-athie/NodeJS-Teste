import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('followers', table => {
    table.increments('id_followers').primary();

    table.integer('seguidor_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  });
};

export async function down(knex: Knex){
  return knex.schema.dropTable('followers');
};