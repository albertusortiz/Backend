'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const config = require('./config')
const user = require('./api/components/user/network')
const errors = require('./network/errors')
const app = express()

app.use(bodyParser.json())

const swaggerDoc = require('./api/swagger.json')
const auth = require('./api/components/auth/network')

// ROUTER
app.use('/api/user', user)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(config.api.port, () => {
  console.log(process.env.PORT)
  console.log(`Api escuchando en el puerto ${config.api.port}`)
})
