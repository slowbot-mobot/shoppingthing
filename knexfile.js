module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      charset: 'utf8'
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '/db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }
  }
};
