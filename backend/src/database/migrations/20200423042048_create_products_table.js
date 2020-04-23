
exports.up = function(knex) {
    return knex.schema.createTable("products", function (table) {
        table.increments();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.decimal("value").notNullable();
        table.decimal("quantity").notNullable();
        table.decimal("sold").notNullable();
        table.date("date")
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
