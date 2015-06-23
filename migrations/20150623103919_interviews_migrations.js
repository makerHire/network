
exports.up = function(knex, Promise) {
	console.log('interview Migrations')



	return Promise.all([
	knex.schema.table('interviews', function (table) {
	  table.dropColumn('date');
	  table.dateTime('scheduled_date');
	  table.dateTime('occured_date')
	  table.integer('contacts').references('id').inTable('contacts');
	  table.string('follow_up')
	  table.integer('quality')
	  table.integer('preparedness')
	}),

	knex.schema.createTable('questions', function(table){
		table.increments('id').primary();
		table.string('name')
		table.integer('interview_id').references('id').inTable('interviews')
	})

  ])
};

exports.down = function(knex, Promise) {

};
