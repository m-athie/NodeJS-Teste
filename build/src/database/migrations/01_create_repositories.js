"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('repositories', table => {
            table.increments('id_rep').primary();
            table.string('nome_rep').notNullable();
            table.string('description_rep').notNullable();
            table.integer('publicacao').notNullable().defaultTo('now()'),
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
                    .onDelete('CASCADE');
        });
    });
}
exports.up = up;
;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('repositories');
    });
}
exports.down = down;
;
