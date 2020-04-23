
exports.up = function(knex, Promise) {
    return knex.schema.createTable("events", function(table) {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("image").notNullable();
        table.string("city").notNullable();
        table.string("uf", 2).notNullable();
        table.decimal("value").notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("events");
};
