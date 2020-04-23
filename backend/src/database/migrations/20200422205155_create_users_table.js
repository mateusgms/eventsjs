
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.string("id").primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('image').notNullable();
        table.string("phone").notNullable();
        table.string("city").notNullable();
        table.string("uf", 2).notNullable();
        table.boolean('is_complete').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.boolean('is_admin');
        table.enu('products', []).notNullable();
        table.enu('events', []).notNullable();
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
