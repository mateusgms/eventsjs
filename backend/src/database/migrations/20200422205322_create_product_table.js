
exports.up = function(knex) {
    return knex.schema.createTable("products", function(table) {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("image").notNullable();
        table.decimal("value").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("products");
};
