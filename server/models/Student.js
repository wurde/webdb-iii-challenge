'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Student {
  static async all() {
    return await db_client('students')
  }

  static async find(id) {
    return db_client('students').where({ id }).first()
  }

  static async create(role) {
    return await db_client('students').insert(role)
  }

  static async update(id, role) {
    return db_client('students')
      .where({ id }).first()
      .update(role)
  }

  static async remove(id) {
    return await db_client('students')
      .where({ id: req.params.id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Student
