const mysqlConn     = require('../services/mysqlConn')
const asyncHandler  = require('express-async-handler')
const services = require('../services/methods')

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
    getbooks: asyncHandler( async (req, res) => {
        const free      = `SELECT r.id, r.hotels_id, r.number, r.squaremeter, r.price, r.reserved, h.name, h.stars FROM rooms r JOIN hotels h ON h.id = r.hotels_id`
        const reserved  = `SELECT r.id, r.hotels_id, r.number, r.squaremeter, r.price, r.reserved, h.name, h.stars FROM rooms r JOIN hotels h ON h.id = r.hotels_id WHERE r.reserved = "i" ORDER BY r.id`
        const freeRooms = await services.queryDataFromBd(free)
        const reservedRooms = await services.queryDataFromBd(reserved)
        console.log('FR ', freeRooms)
        res.status(200).json({ freeRooms, reservedRooms })
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
        const { hotelId, roomId, arrival, getaway } = req.body
        console.log('REQ ', req.body)
        if (!hotelId || !roomId || !arrival || !getaway) {
            res.status(400)
            throw new Error('INCOMPLETE DATA')
        }
        const query     = 'INSERT INTO books SET ?'
        const params    = {users_id: userId, holtels_id: hotelId, rooms_id: roomId, arrival, getaway}
        const result    = services.saveDataToBd(query, params)
        const update    =`UPDATE rooms SET reserved='i' WHERE id ='${roomId}'`
        const param     = {}
        const result1   = services.saveDataToBd(update, param)
        console.log('RES1 ', result1)
        res.status(200).json({ message: "POST ", result})
    }),
    /**
     ** UPDATE BOOKS
     *
     ** @Route   PUT /booking/:id
     *  @param { Object } req 
     *  @param { Object } res
     */
    updateBook: asyncHandler(async (req, res) => {
        const userId    = res.id
        const bookingId = req.params.id
        //  TODO  UPDATE BOOKING PARAMETERS  IN BOOKING TABLE
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
        const userId    = res.id
        const bookingId = req.params.id
        //  TODO    DELETE BOOKING FROM DATABASE AND PDATE ROOM RESERVED TO 'n'
        res.status(200).json({ message: "DELETE ", id})
    })

}
