exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(t) {
        t.increments('id').primary()
        t.string('namadepan').notNullable()
        t.string('namabelakang').notNullable()
        t.string('kelamin').notNullable()
        t.string('email').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
