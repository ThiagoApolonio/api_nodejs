const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const parserbody = require('body-parser')
const routes = require('./config/router')
const { text } = require('express')


const app = express()

app.use(morgan('dev'))
app.use(parserbody.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

/**Configurando porta e localhost */
app.listen(8080, () => {
    console.log('express started at http://localhost:8080')
})
