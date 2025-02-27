'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Cohort = require('../models/Cohort')
const Student = require('../models/Student')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /cohorts
 */

router.route('')
  .get(async (req, res) => {
    try {
      const cohorts = await Cohort.all()
      res.status(200).json(cohorts)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Cohort.create(req.body)

      const cohort = await Cohort.find(id)

      res.status(201).json(cohort)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /cohorts/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const cohort = await Cohort.find(req.params.id)
      res.status(200).json(cohort)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Cohort.update(req.params.id, req.body)

      if (count > 0) {
        const cohort = await Cohort.find(req.params.id)

        res.status(200).json(cohort)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .delete(async (req, res) => {
    try {
      const count = await Cohort.remove(req.params.id)

      if (count > 0) {
        res.sendStatus(204)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET /cohorts/:id/students
 */

router.route('/:id/students')
  .get(async (req, res) => {
    try {
      const students = await Student.allByCohort(req.params.id)
      res.status(200).json(students)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Export router
 */

module.exports = router
