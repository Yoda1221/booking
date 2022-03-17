const bcrypt        = require('bcryptjs')
const jwt           = require('jsonwebtoken')
const services      = require('../services/methods')
const mysqlConn     = require('../services/mysqlConn')
const asyncHandler  = require('express-async-handler')

module.exports = {
    signup: asyncHandler(async (req, res) => {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400)
            throw new Error('PLEASE FIL ALL FIELDS')
        }
        // TODO CHECK IS USER IS EXISTS
        //* HASH PASSWORD
        const salt              = await bcrypt.genSalt(10)
        const hashedPassword    = await bcrypt.hash(password, salt)
        const query             = `INSERT INTO users SET ? `
        const params            = {  name, email, password: hashedPassword }
        const result            = await services.saveDataToBd(query, params)
        //? GET THE NEW USER DATA
        res.json(result)
    }),
    /**
     ** USER LOGIN
     *
     * @Route   POST /login    
     * @param { Object } req 
     * @param { Object } res 
     */
    login: asyncHandler( async (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400)
            throw new Error('e-MAIL OR PASSWORD IS MISSING!')
        }
        const query = `SELECT id, name, email, password FROM users WHERE email = "${email}" `
        const user  = await services.queryDataFromBd(query)
        if (user && (await bcrypt.compare(password, user[0].password))) {
            res.status(200).json({
              id: user[0].id,
              name: user[0].name,
              email: user[0].email,
              token: services.generateToken(res, user[0].id),
            })
          } else {
            res.status(400)
            throw new Error('Invalid credentials')
          }
    }),
    /**
     *  //* USER LOGOUT
     * 
     * @param {*} req 
     * @param {*} res 
     */
    logout: (req, res) => {
        res.cookie(process.env.COOKIENAME, '', { expires: new Date(Date.now() -1 )})
        res.status(204).redirect('/')
    },
    /**
     ** GET USER DATA
     *
     * @Route   POST /userdata   
     * @param { Object } req 
     * @param { Object } res 
     */
    userdata: asyncHandler(async (req, res) => {
        res.status(200).json({ message: "HOME"})
    })

}
