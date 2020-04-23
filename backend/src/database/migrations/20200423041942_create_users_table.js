
exports.up = function(knex) {
    return knex.schema.table("users", function (table) {
        table.string("id").primary();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string("phone").notNullable();
        table.string("city").notNullable();
        table.string("uf", 2).notNullable();
        table.enu('products', []).notNullable();
        table.enu('events', []).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
