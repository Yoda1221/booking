const jwt           = require('jsonwebtoken')
const asyncHandler  = require('express-async-handler')
const { redirect } = require('express/lib/response')
//const User = require('../models/userModel')

const ifUserLogged = asyncHandler(async (req, res, next) => {
    const token = req.cookies.Booking
    if (token) {
        jwt.verify(token, process.env.JWTSECRET, (err, decodecToken) => {
            if (err) {
                console.log('JWT VRIFY ERROR ', err)
                redirect('/')
            } else {
                console.log('DT ', decodecToken)
                res.id = decodecToken.id
                next()
            }
        })
    } else {
        res.redirect('/')
    }

    next()
})

module.exports = { ifUserLogged }
