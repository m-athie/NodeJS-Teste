"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
const path = require("path");
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});
exports.default = db;
