exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("title").notNullable();
    table.text("link").notNullable();
    table.text("description");
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("links");