exports.up = function(knex) {
    return knex.schema.createTable('activities', table => {
        table.increments();
        table.string('title', 255).notNullable();
        table.string('postcode', 128).notNullable();
        // ideally this would link to the owner table but it doesn't exist yet
        // table.foreign('owner_id').references('Owners.owner_id');
        table.integer('owner_id').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('activities');
};
