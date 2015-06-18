
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('users', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('email')
      table.string('avatar_url')

      table.timestamps()
    }),

    knex.schema.createTable('groups', function (table) {

      table.string('uid').primary()
      table.string('school_uid').references('uid').inTable('schools').notNullable()
      table.string('name')
      table.string('role')
      table.json('info')

      table.timestamps()
    }),

    knex.schema.createTable('memberships', function (table) {

      table.string('uid').primary()
      table.string('user_uid').references('uid').inTable('users').notNullable()
      table.string('group_uid').references('uid').inTable('groups').notNullable()
      table.string('role')

      table.timestamps()
    }),

    knex.schema.createTable('schools', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('location')
      table.string('url')

      table.timestamps()
    })

  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('memberships'),
    knex.schema.dropTable('groups'),
    knex.schema.dropTable('users')
  ])
}
