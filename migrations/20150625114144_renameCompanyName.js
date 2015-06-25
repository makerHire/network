
exports.up = function(knex, Promise) {
  
	return Promise.all([
		console.log('adding company_name migration')

		knex.schema.table('companies', function (table) {
			table.renameColumn('name', 'company_name');
    	})
	])


};

exports.down = function(knex, Promise) {
  
};
