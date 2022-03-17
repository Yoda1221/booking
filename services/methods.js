const axios         = require('axios')
const jwt           = require('jsonwebtoken')
const mysqlConn     = require('./mysqlConn')
const asyncHandler  = require('express-async-handler')
require('dotenv').config()
const jwtSecret     = process.env.JWTSECRET
const coookieName   = process.env.COOKIENAME


const generateToken = (res, id) => {
    const token = jwt.sign({ id }, process.env.JWTSECRET, {
      expiresIn: '30d',
    })
    createCookie(res, token)
    return token
}
const createCookie = (res, token) => {
    res.cookie(process.env.COOKIENAME, token, { httpOnly: true, expires: new Date(Date.now() + (1000*60*60*24*30))})
}
/**
 ** QUERY DATA FROM DATABASE
 *
 *  @param { String }
 *  @param { Object }
 */
const queryDataFromBd = asyncHandler(async (query) => {
    const result = new Promise( async (resolve, reject) => {
        await mysqlConn.query(query, (err, result) => {
            if (err) return reject(err)
            else return resolve(result)
        })
    })
    return result
})
/**
 ** SAVE DATA TO DATABASE
 *
 *  @param { String }
 *  @param { Object }
 */
const saveDataToBd = asyncHandler(async (query, params) => {
    const message = new Promise( async (resolve, reject) => {
        await mysqlConn.query(query, params, (err, result) => {
            if (err) return reject(err)
            else return resolve('INSERT TO DATABASE COMPLETE')
        })
    })
    return message
})

const services = {
    createCookie,
    generateToken,
    saveDataToBd,
    queryDataFromBd
}

module.exports = services
