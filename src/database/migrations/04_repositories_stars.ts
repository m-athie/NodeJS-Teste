import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('rep_stars', table => {
    table.increments('id_stars').primary();
    table.decimal('count_stars').defaultTo(0);

    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.integer('id_rep')
    .notNullable()
    .references('id_rep')
    .inTable('repositories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  });
};

export async function down(knex: Knex){
  return knex.schema.dropTable('stars');
};