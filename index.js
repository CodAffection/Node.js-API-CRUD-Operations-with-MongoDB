const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')

const app = express()
//middleware
app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)


connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))