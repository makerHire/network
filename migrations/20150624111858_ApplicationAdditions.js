
exports.up = function(knex, Promise) {
	console.log('running messages migration')
	


	return Promise.all([

	knex.schema.table('applications', function (table) {

      table.integer('company_id').references('id').inTable('companies')
    }),



    knex.schema.createTable('messages', function(table) {
	  table.increments('id').primary()		
      table.string('sender_uid').references('uid').inTable('users').notNullable()
      table.string('receiver_uid').references('uid').inTable('users').notNullable()
      table.integer('app_id').references('id').inTable('applications')
      table.string('body')

      table.timestamps()
  		})
	])
};

exports.down = function(knex, Promise) {
  
};
