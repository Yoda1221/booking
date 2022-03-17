const mysqlConn     = require('../services/mysqlConn')
const asyncHandler  = require('express-async-handler')

module.exports = {
    home: (req, res) => {
        const userId = res.id
        console.log(userId)
        res.status(200).json({ message: "HOME"})
    },
    /**
     ** GET BOOKS
     *
     ** @Route   GET /booking   
     *  @param { Object } req 
     *  @param { Object } res 
     */
    getbooks: asyncHandler(async (req, res) => {
        res.status(200).json({ message: "GET BOOKS"})
    }),
    /**
     ** POST BOOKS
     *
     ** @Route   POST /booking   
     *  @param { Object } req 
     *  @param { Object } res
     */
    setBooks: asyncHandler(async (req, res) => {
        const userId = res.id
        if (!req.body.hotel) {
            res.status(400)
            throw new Error('PLEASE SELECT A HOTEL')
        }
        const hotel = req.body.hotel
        res.status(200).json({ message: "POST ", hotel})
    }),
    /**
     ** UPDATE BOOKS
     *
     ** @Route   PUT /booking/:id
     *  @param { Object } req 
     *  @param { Object } res
     */
    updateBook: asyncHandler(async (req, res) => {
        const userId = res.id
        const bookingId = req.params.id
        res.status(200).json({ message: "UPDATE ", id})
    }),
    /**
     ** DELETE BOOKS
     *
     ** @Route   DELETE /booking/:id
     *  @param { Object } req 
     *  @param { Object } res
     */
    deleteBook: asyncHandler(async (req, res) => {
        const userId = res.id
        console.log(userId)
        const bookingId = req.params.id
        res.status(200).json({ message: "DELETE ", id})
    })

}
