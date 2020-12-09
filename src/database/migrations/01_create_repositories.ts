import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('repositories', table => {
    table.increments('id_rep').primary();
    table.string('nome_rep').notNullable();
    table.string('description_rep').notNullable();
    table.timestamp('publicacao').defaultTo('now()'),
    table.string('slug').notNullable();
    table.decimal('stars').references('id_stars')
    .inTable('rep_stars')
    .onUpdate('CASCADE')
    .onDelete('CASCADE'),


    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  });
};

export async function down(knex: Knex){
  return knex.schema.dropTable('repositories');
};