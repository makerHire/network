
exports.up = function(knex, Promise) {
	console.log('interview Migrations')

	knex.schema.table('interviews', function (table) {
	  table.dropTable('date');
	  table.dateTime('scheduled_date');
	  table.dateTime('occured_date')
	  table.integer('contacts').references('id').inTable('contacts');
	  table.string('follow_up')
	  table.integer('quality')
	  table.integer('preparedness')
	}),

	knex.schema.table('questions', function(table){
		table.increments('id').primary();
		table.string('name')
		table.integer('interview_id').references('interviews').inTable('interviews')
	})

  
};

exports.down = function(knex, Promise) {

};
