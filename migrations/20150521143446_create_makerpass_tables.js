
exports.up = function(knex, Promise) {

  console.log('hello')

  return Promise.all([
    knex.schema.createTable('users', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('email')
      table.string('avatar_url')
      table.string('status')
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


    knex.schema.createTable('jobs', function(){
      table.integer.increments('id').primary()
      table.integer('company_id').references('id').inTable('companies')
      table.integer('title_id').references('id').inTable('titles')
      table.string('user_id').references('uid').inTable('users')




    })

    knex.schema.createTable('companies', function (table) {

      table.integer.increments('id').primary()
      table.string('name')
      table.string('url')
      table.string('address')

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

    knex.schema.createTable('applications', function (table) {

      table.integer.increments('id').primary()
      table.string('status')
      table.dateTime('date_applied')
      table.integer('company').references('uid').inTable('companies')
      table.integer('contact_id').referenced('id').inTable('contacts')
      table.string('app_method')
      table.string('user_id').references('uid').inTable('users')
      table.boolean('active')

      table.timestamps()
    }),



    knex.schema.createTable('titles', function(table){

      table.integer.increments('id').primary();
      table.string('title')

      table.timestamps()
    }),

    knex.schema.createTable('memberships', function (table) {

      table.string('uid').primary()
      table.string('user_uid').references('uid').inTable('users').notNullable()
      table.string('group_uid').references('uid').inTable('groups').notNullable()
      table.string('role')

      table.timestamps()
    }),


    knex.schema.createTable('interviews', function(table){

      table.integer.increments('id').primary();
      table.integer('app_id').referenes('id').inTable('applications')

      table.timestamps()

    }),



    knex.schema.createTable('contacts', function(table){

      table.integer.increments('id').primary()
      table.string('name')
      table.string('phone_number')
      
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
    knex.schema.dropTable('memberships'),
    knex.schema.dropTable('groups'),
    knex.schema.dropTable('users')
  ])
}
