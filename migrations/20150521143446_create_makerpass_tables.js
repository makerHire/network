
exports.up = function(knex, Promise) {
  console.log('hello')

  return Promise.all([
    knex.schema.createTable('users', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('email')
      table.string('avatar_url')
      table.string('role')
      table.string('jobs').references('uid').inTable('jobs')
      table.string('status').references('uid').inTable('phases')
      table.boolean('active')
      table.string('school').references('uid').inTable('schools')
      table.string('company').references('uid').inTable('companies')
      table.string('salary')
      table.string('gender')
      
      table.timestamps()
    }),

    knex.schema.createTable('groups', function (table) {

      table.string('uid').primary()
      table.string('school_uid').references('uid').inTable('schools')
      table.string('name_id')
      table.string('name')
      table.string('role')
      table.json('info')

      table.timestamps()
    }),

    knex.schema.createTable('phases', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('phase').references('uid').inTable('phases').notNullable()
      table.string('users').references('uid').inTable('users').notNullable()
      table.string('school').references('uid').inTable('schools').notNullable()

      table.timestamps()
    }),

    knex.schema.createTable('schools', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('name_id')
      table.string('location')
      table.string('url')

      table.timestamps()
    }),

    knex.schema.createTable('jobs', function (table) {

      table.string('uid').primary()
      table.string('user')
      table.string('title')
      table.dateTime('date_applied')
      table.string('company').references('uid').inTable('companies')
      table.string('contact')
      table.string('app_method')
      table.string('status').references('uid').inTable('phases')
      table.boolean('active')
      table.json('details')

      table.timestamps()
    }),

    knex.schema.createTable('companies', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('url')
      table.string('location')
      table.string('app_method')
      table.string('contacts')
      table.string('status').references('uid').inTable('phases')
      table.boolean('active')

      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('phases'),
    knex.schema.dropTable('groups'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('companies'),
    knex.schema.dropTable('jobs'),
    knex.schema.dropTable('mem')

  ])
}
