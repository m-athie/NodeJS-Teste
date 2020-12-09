import Knex = require('knex');

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('localizacao').notNullable();
    table.string('avatar').notNullable();
    table.string('username').notNullable();
    table.string('bio', 1000).notNullable();
  });
};

export async function down(knex: Knex){
  return knex.schema.dropTable('users');
};