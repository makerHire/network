
exports.up = function(knex, Promise) {
  
	return Promise.all([


		knex.schema.table('companies', function (table) {
			table.renameColumn('name', 'company_name');
    	})
	])


};

exports.down = function(knex, Promise) {
  
};
