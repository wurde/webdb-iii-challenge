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

  static async allByCohort(cohort_id) {
    return await db_client('students').where({ cohort_id })
  }

  static async find(id) {
    return db_client.select('students.id', 'students.name', 'cohorts.name AS cohort_name').from('students')
      .leftJoin('cohorts', 'students.cohort_id', 'cohorts.id')
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
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Student
