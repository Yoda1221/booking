const http          = require('http')
const cors          = require('cors')
const express       = require('express')
const colors        = require('colors')
const cookieParse   = require('cookie-parser')
const routes        = require('./routes/routes')
const modules       = require('./services/modules')
const app           = express()
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config()

//*  MIDDLEWARE
app.use(cors())
app.use(cookieParse())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//*  ROUTES
app.use(routes)

app.use(errorHandler)

//*  RESTART SERVER AND INSERT TIME
const PORT  = process.env.PORT || 4008
const httpServer = http.createServer(app)
httpServer.listen(PORT, () => {
    console.log(`\n\n|-O-|\n\nServer is running on PORT: ${PORT.yellow} >>> ${modules.curentDate().magenta}`.gray)
})
