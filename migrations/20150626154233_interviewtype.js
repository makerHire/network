
exports.up = function(knex, Promise) {
	console.log('adding interview_type migration')

	return Promise.all([


   	 	knex.schema.table('interviews', function (table) {
    		table.string('interview_type')
    	})
	])
  
};

exports.down = function(knex, Promise) {
  
};
