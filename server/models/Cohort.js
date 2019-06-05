'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Cohort {
  static async all() {
    return await db_client('cohorts')
  }

  static async find(id) {
    return db_client('cohorts').where({ id }).first()
  }

  static async create(role) {
    return await db_client('cohorts').insert(role)
  }

  static async update(id, role) {
    return db_client('cohorts')
      .where({ id }).first()
      .update(role)
  }

  static async remove(id) {
    return await db_client('cohorts')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Cohort
