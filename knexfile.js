
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'learn_dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'learn_test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://yuofkehmpkcdbk:D15Qec1JRfhWn_vE7-CIbsbo28@ec2-54-83-43-118.compute-1.amazonaws.com:5432/d8h2gnum0his57',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
