'use strict'

/**
 * Export configuration
 */

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/db/development.sqlite',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds'
    },
  }
}
