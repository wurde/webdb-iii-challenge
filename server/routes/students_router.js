'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Student = require('../models/Student')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /students
 */

router.route('')
  .get(async (req, res) => {
    try {
      const students = await Student.all()
      res.status(200).json(students)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Student.create(req.body)

      const student = await Student.find(id)

      res.status(201).json(student)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /students/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const student = await Student.find(req.params.id)
      res.status(200).json(student)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Student.update(req.params.id, req.body)

      if (count > 0) {
        const student = await Student.find(req.params.id)

        res.status(200).json(student)
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
      const count = await Student.remove(req.params.id)

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
 * Export router
 */

module.exports = router
