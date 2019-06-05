'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/cohorts', require('./routes/cohorts_router'))
app.use('/students', require('./routes/students_router'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () =>
    console.log(`Express running on ${port}`)
  )
}

/**
 * Export app
 */

module.exports = app
